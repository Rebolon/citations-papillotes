# AngularCitations

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0 and upgraded to the latest angular version (15.0 for instance at 30/11/2022)

With Angular 10.2.0, tailwindcss requires thoses steps to run finely :
 * Usage of TailwindCSS with the help of this : https://medium.com/@jacobneterer/angular-and-tailwindcss-2388fb6e0bab
 * To install Tailwind, follow https://camerondwyer.com/2020/07/09/using-tailwind-css-in-an-angular-cli-app/ 
 * Take care woz you will need to install postcss@8, because by default it installs v7 (https://stackoverflow.com/questions/63858991/how-to-setup-tailwind-for-a-new-angular-project)
 * Also follow this https://fullyunderstood.com/get-started-with-angular-tailwind-css/ because it helps to reduce the size of styles (the tailwind.config.js is the solution)

But with Angular 11.2, it's more simpler and there is no more needs to all these hacks (thanks for them coz it really helped me on those times).

In the last few days, i also added the package @angular/pwa to allow the lighthouse benchmark to improve the notation.

I also added ngUniversal for prerendering on /cites and /authors(and ssr if i want to serve page with node-express)
Use 
 * npm run build:ssr to build app, then generate code with ngUniversal and also prerender to render wished routes
 * optional coz it will remove all docs folder: npm run build to generate frontend code 

@TODO :
 * [ ] externalize app-pager into a standalone component on npm with ng-pager as name (https://jasonwatmore.com/post/2020/06/16/angular-npm-how-to-publish-an-angular-component-to-npm)
 * [ ] use app-pager in cites by author, authors
 * [ ] improve styles of ng-pager with responsive mode ? in mobile only use next/prev and display currentPage / totalPage
 * [ ] use standalone component of ng14 for ng-pager
