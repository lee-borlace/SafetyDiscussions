using System.Web;
using System.Web.Optimization;

namespace SafetyDiscussionsWeb
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/app").Include(
               "~/Scripts/appRoot.js"
            ));

            bundles.Add(new ScriptBundle("~/bundles/react").Include(
               "~/Scripts/react.js",
               "~/Scripts/react-dom.js",
               "~/Scripts/redux.js",
               "~/Scripts/redux-thunk.js",
               "~/Scripts/react-redux.js"
           ));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                "~/Scripts/modernizr-*"
            ));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                "~/Content/App.css",
                "~/Content/Header.css",
                "~/Content/Site.css"
            ));

            bundles.Add(new StyleBundle("~/Content/fabric-css").Include(
                "~/Content/fabric.css"
            ));

            // Always use bundling and minification when in RELEASE mode. Note this will override web.config!
#if !DEBUG
            BundleTable.EnableOptimizations = true;
#endif
        }
    }
}
