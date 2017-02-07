using Microsoft.SharePoint.Client;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using SafetyDiscussionsWeb.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SafetyDiscussionsWeb.Controllers
{
    public class DiscussionController : Controller
    {
        /// <summary>
        /// In a real app, the following would be abstracted away into a service injected into this controller.
        /// </summary>
        /// <param name="discussion">The discussion.</param>
        /// <returns></returns>
        [SharePointContextFilter]
        [HttpPut]
        public ActionResult CreateDiscussion(SafetyDiscussion discussion)
        {
            var spContext = SharePointContextProvider.Current.GetSharePointContext(HttpContext);

            using (var clientContext = spContext.CreateUserClientContextForSPAppWeb())
            {
                if (clientContext != null)
                {
                    var discussionList = clientContext.Web.Lists.GetByTitle("Safety Discussions");
                    var itemCreateInfo = new ListItemCreationInformation();

                    var newItem = discussionList.AddItem(itemCreateInfo);

                    if (discussion.Date.HasValue)
                    {
                        newItem["DiscussionDate"] = discussion.Date;
                    }

                    newItem["DiscussionLocation"] = discussion.DiscussionLocation;
                    newItem["Subject"] = discussion.Subject;
                    newItem["Outcomes"] = discussion.Outcomes;

                    newItem.Update();

                    clientContext.ExecuteQuery();

                    discussion.Id = newItem.Id;
                }
            }

            return GetJsonResult(discussion);
        }


        /// <summary>
        /// In a real app, the following would be abstracted away into a service injected into this controller.
        /// </summary>
        /// <returns></returns>
        [SharePointContextFilter]
        [HttpGet]
        public ActionResult MyDiscussions()
        {
            var discussions = new List<SafetyDiscussion>();
            
            var spContext = SharePointContextProvider.Current.GetSharePointContext(HttpContext);

            using (var clientContext = spContext.CreateUserClientContextForSPAppWeb())
            {
                if (clientContext != null)
                {
                    var discussionList = clientContext.Web.Lists.GetByTitle("Safety Discussions");


                    var queryText = @"
                        <View>
                            <Query>
                                <Where>
                                    <Eq>
                                        <FieldRef Name='Author' LookupId='True'/>
                                        <Value Type='Lookup'>
                                            <UserID/>
                                        </Value>
                                    </Eq>
                                </Where>
                                <OrderBy>
                                    <FieldRef Name=""DiscussionDate"" Ascending=""FALSE""/>
                                </OrderBy>
                            </Query>
                            <ViewFields>
                                <FieldRef Name=""Observer"" />
                                <FieldRef Name=""DiscussionLocation"" />
                                <FieldRef Name=""DiscussedWith"" />
                                <FieldRef Name=""Subject"" />
                                <FieldRef Name=""Outcomes"" />
                                <FieldRef Name=""Id"" />
                                <FieldRef Name=""DiscussionDate"" />
                            </ViewFields>
                            
                        </View>";

                    var query = new CamlQuery();
                    query.ViewXml = queryText;

                    var itemCollection = discussionList.GetItems(query);
                    clientContext.Load(
                        itemCollection, 
                        items => items.Take(10).Include( // TODO : In a real app instead of taking 10 there would be a smarter mechanism e.g. paging
                            i => i["Observer"],
                            i => i["DiscussionLocation"],
                            i => i["DiscussedWith"],
                            i => i["Subject"],
                            i => i["Outcomes"],
                            i => i["DiscussionDate"],
                            i => i.Id
                        ));

                    clientContext.ExecuteQuery();

                    foreach (ListItem item in itemCollection)
                    {
                        discussions.Add(DiscussionFromListItem(item));
                    }
                }

                return GetJsonResult(discussions);
            }
        }


        private SafetyDiscussion DiscussionFromListItem(ListItem item)
        {
            return new SafetyDiscussion
            {
                Observer = item["Observer"]?.ToString(),
                DiscussionLocation = item["DiscussionLocation"]?.ToString(),
                DiscussedWith = item["DiscussedWith"]?.ToString(),
                Subject = item["Subject"]?.ToString(),
                Outcomes = item["Outcomes"]?.ToString(),
                DateISO = item["DiscussionDate"] != null? ((DateTime)(item["DiscussionDate"])).ToUniversalTime().ToString("o", System.Globalization.CultureInfo.InvariantCulture) : null,
                Id = item.Id
            };
        }


        private ContentResult GetJsonResult(object data)
        {
            var camelCaseFormatter = new JsonSerializerSettings();
            camelCaseFormatter.ContractResolver = new DefaultContractResolver();
            var serialised = JsonConvert.SerializeObject(data, camelCaseFormatter);

            return new ContentResult
            {
                Content = serialised,
                ContentType = "application/json"
            };
        }
    }
}