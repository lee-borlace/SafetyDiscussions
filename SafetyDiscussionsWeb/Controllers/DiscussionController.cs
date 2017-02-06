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

                    // TODO : My items only.
                    var camlQuery = CamlQuery.CreateAllItemsQuery();

                    var items = discussionList.GetItems(camlQuery);
                    clientContext.Load(items);
                    clientContext.ExecuteQuery();

                    foreach (ListItem item in items)
                    {
                        discussions.Add(new SafetyDiscussion {
                            Observer = item["Observer"].ToString(),
                            DiscussionLocation = item["DiscussionLocation"].ToString(),
                            DiscussedWith = item["DiscussedWith"].ToString(),
                            Subject = item["Subject"].ToString(),
                            Outcomes = item["Outcomes"].ToString(),
                            Id = item.Id
                        });
                    }
                }

                return GetJsonResult(discussions);
            }
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