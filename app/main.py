from aiohttp import web
import aiohttp_jinja2
import jinja2
import os

from settings import config, BASE_DIR


@aiohttp_jinja2.template('hello.html')
async def hello(request):
    return {'greet': 'Hello', 'name': 'Arnau'}

app = web.Application()
app['config'] = config
aiohttp_jinja2.setup(app,
    loader=jinja2.FileSystemLoader(str(BASE_DIR / 'app' / 'templates')))

app.add_routes([web.get('/', hello)])
app.router.add_static('/static/',
                      path=BASE_DIR / 'static',
                      name='static')

port = int(os.environ.get("PORT", 8080))
web.run_app(app, port=port)
