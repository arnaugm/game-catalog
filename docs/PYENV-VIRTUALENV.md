# Python virtual environments with pyenv-virtualenv

A quick and easy way of dealing with Python virtual environments to isolate dependencies between projects and even using different Python versions is using the combination of pyenv and virtualenv.

https://github.com/pyenv/pyenv-virtualenv

## Mac installation of pyenv-virtualenv

- Install pyenv and pyenv-virtualenv packages
```
brew install pyenv pyenv-virtualenv
```

## Create a virtual environment

- Install desired Python version
```
pyenv install <python_version>
```

- Add initializations to your shell "rc" file (.bashrc, .zshrc, ...)
```
export PYENV_ROOT="$HOME/.pyenv"
eval "$(pyenv init -)"
eval "$(pyenv virtualenv-init -)"
export PYENV_VIRTUALENV_DISABLE_PROMPT=0
```

- Create a virtual env for the project
```
pyenv virtualenv <python_version> <project_name>
```

## Use the virtual environment

- Activate the virtual env
```
pyenv activate <project_name>
```

- Deactivate the virtual env
```
pyenv deactivate
```