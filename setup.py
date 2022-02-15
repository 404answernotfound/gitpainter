# -*- coding: utf-8 -*-

from setuptools import setup, find_packages


with open('README.rst') as f:
    readme = f.read()

with open('LICENSE') as f:
    license = f.read()

setup(
    name='Gitpainter',
    version='0.1.0',
    description='A painting scheduler for git commits to showcase commit patterns on your profile',
    long_description=readme,
    author='Lorenzo Pieri',
    author_email='-',
    url='https://github.com/404answernotfound/gitpainter',
    license=license,
    packages=find_packages(exclude=('tests', 'docs'))
)

