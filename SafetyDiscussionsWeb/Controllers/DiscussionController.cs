using Microsoft.SharePoint.Client;
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
        public int CreateDiscussion(SafetyDiscussion discussion)
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


                }
            }

            return 0;
        }
    }
}