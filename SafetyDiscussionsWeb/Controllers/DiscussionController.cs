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