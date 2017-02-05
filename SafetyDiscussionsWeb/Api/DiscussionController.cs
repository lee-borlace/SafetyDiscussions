using Microsoft.SharePoint.Client;
using SafetyDiscussionsWeb.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace SafetyDiscussionsWeb.Api
{
    public class DiscussionController : ApiController
    {
        [SharePointContextFilter]
        [Route("api/discussions/create")]
        [HttpPut]
        public int CreateDiscussion([FromBody]SafetyDiscussion discussion)
        {

            var spContext = SharePointContextProvider.Current.GetSharePointContext(HttpContext.Current);

            using (var clientContext = spContext.CreateUserClientContextForSPHost())
            {
                if (clientContext != null)
                {
                    var discussionList = clientContext.Web.Lists.GetByTitle("Safety Discussions");
                    var itemCreateInfo = new ListItemCreationInformation();

                    var newItem = discussionList.AddItem(itemCreateInfo);

                    if (discussion.DiscussionDate.HasValue)
                    {
                        newItem["DiscussionDate"] = discussion.DiscussionDate;
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
