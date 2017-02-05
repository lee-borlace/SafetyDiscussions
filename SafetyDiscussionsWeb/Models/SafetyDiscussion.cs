using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SafetyDiscussionsWeb.Models
{
    public class SafetyDiscussion
    {
        public string Observer { get; set; }

        [JsonProperty("DiscussionDate")]
        public string DiscussionDateISOString { get; set; }

        public DateTime? DiscussionDate
        {
            get
            {
                DateTime? retVal = null;

                DateTime parsedDate;

                if (DateTime.TryParse(DiscussionDateISOString, out parsedDate))
                {
                    retVal = parsedDate;
                }

                return retVal;
            }
        }

        public string DiscussionLocation { get; set; }
        public string DiscussedWith { get; set; }
        public string Subject { get; set; }
        public string Outcomes { get; set; }
        public int Id { get; set; }
    }
}
