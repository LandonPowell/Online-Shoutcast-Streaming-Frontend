import web, requests, config

html = web.template.render("html/")

class index:
    def GET(self):
        return html.index(
            config.name, 
            config.shoutcast + ":" + config.port + "/live",
            config.donateLink
        )

class json:
    def GET(self):
        r = requests.get(
            config.shoutcast + ":" + config.port + "/stats?sid=1&json=1"
        )
        return r.text

urls = (
    "/",        index,
    "/json",    json
)

app = web.application(urls, globals())
if __name__ == "__main__":
    app.run()