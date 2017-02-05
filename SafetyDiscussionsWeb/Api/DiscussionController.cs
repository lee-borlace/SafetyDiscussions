using SafetyDiscussionsWeb.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
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
            return 0;
        }
    }
}
