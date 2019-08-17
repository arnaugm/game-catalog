from setuptools import setup, find_packages

install_requires = [
    'aiohttp',
    'aiodns',
    'cchardet',
    'pyyaml',
]

dev_requires = [
    'black',
    'flake8',
    'pip-tools',
    'pytest',
    'python-githooks'
]

setup(
    name="game-catalog",
    version="0.0.1",
    description="Videogames catalog aiohttp API with React frontend",
    packages=find_packages(),
    install_requires=install_requires,
    python_requires='>=3.7.3',
    extras_require={
        'dev': dev_requires,
    }
)