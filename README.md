# Project's name
## Tindercats
>ACAB > all cats are boilerplates!

![Tindecats](preview.jpg)

## Description
Have you ever thought that it's easier to live together with animals than with people?
Really?! Then, this is your webapp!!

While finding the "love of your life" is a kind of social construction difficult to believe... Finding your ideal "gatete" is pretty easy and fun with Tindercats!


## MVP
The MVP is to show an amount of cats provided by an API, and make it happen the coolest way by adding some transitions & animations.

## Backlog
>##### FIRST ITERATION:
*Improve UX*
- Test & apply WCAG accessibility tags & guidelines.
- Landing page with some soft animated background
- Loader transition
- Grid & card animation when displaying more info of a cat.
- Display a button to refresh random cats cards without having to click in nav.

>##### SECOND ITERATION:
*Add Features & Change Data source*
- Remove cards feature: be able to remove a card in grid & get it automatically refreshed with a new cat.
- Change API resource to fit better the concept: change from random cats api to cat-adoption's API).
- Login feature: to be able to save favorites and the selected cat for adoption (and then a basic user area with profile data, favorites and an adoption process -if it exists-).
- Improve UX when clicking on a cat: display a cat's fingerprint, and then a contact form to start the cat adoption's funnel.

>##### THIRD ITERATION:
*Expand component logic*
- Create burguer component, so if more pages were added, we'll have an scalable navbar.
- Card component instead of displaying all in Cats Page.
- Button component.
- Footer links as a nav component.


## Data structure
Classes and methods definition.:


>##### PAGES:

*Landing Page*

1. PROPS:
- this.parentElement
- this.title
- this.subtitle
- this.style

2. METHODS:
- this.generate()
- this.render()

*Cats grid page*

1. PROPS:
- this.parentElement
- this.title
- this.movies
- this.style

2. METHODS:
- this.generate()
- this.render()
- this.callStarWarsService()


>##### COMPONENTS

*Navbar (header)*

1. PROPS:
- this.parentElement
- this.links
- this.style

2. METHODS:
- this.generate()
- this.render()

*Footer*

1. PROPS:
- this.parentElement
- this.style
- [this.links] ——> maybe?

2. METHODS:
- this.generate()
- this.render()

*Loading*

1. PROPS:
- this.parentElement
- this.style

2. METHODS:
- this.generate()
- this.render()

*Layout*

1. PROPS:
- this.root
- this.style
- this.elements

2. METHODS:
- this.generate()
- this.render()
- this.getContainers()


## States y States Transitions
Definition of the different states and their transition (transition functions)




## Task
Task definition in order of priority
1. 

## Links


### Trello
Workflow of tasks and backlog:
[Link url](https://trello.com/b/i821T5pF)


### Git
URls for the project repo and deploy:
[Link Repo](https://github.com/annacv/all-cats/) |
[Link Deploy](https://annacv.github.io/all-cats/)


### Slides
URls for the project presentation (slides):
[Link Slides.com](https://docs.google.com/presentation/d/1m1ykttWykq2Sn-1uoLMuNYBetMmCWGOQq6uNfaZ8Hms/edit?usp=sharing)


### Zeplin
Wirewframes:
[Link Zcene Zeplin](https://scene.zeplin.io/project/5d267c5024732d4f8127fa2e)