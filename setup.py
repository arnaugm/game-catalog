from setuptools import setup, find_packages

install_requires = [
    'aiohttp',
    'aiodns',
    'cchardet',
    'pyyaml',
    'pip-tools',
]

dev_requires = [
    'black',
    'flake8',
    'pytest',
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