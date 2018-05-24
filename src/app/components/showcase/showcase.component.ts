import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css']
})
export class ShowcaseComponent implements OnInit {
  constructor() {
  }
  
  
  projects: Project[] = [
    {
      index: 0,
      imgSrc: "./assets/img/EG.PNG",
      title: "Evergreen",
      desc1: `Evergreen is a platform that connects Makers and suppliers to each other.
        Along with being a marketplace for one another, Evergreen provides analytics
        so that makers and suppliers can make the best decision for who is best for the job.`,
      desc2: `This project was created in a four person team over 4 months using Angular front-end,
        Node back-end, and a MySQL database. My biggest roles where creating the front-end Angular
        flow and setting up formulas to be used in MySQL and deployment.`,
      href: "http://evergreenmake.com",
      domain: "evergreenmake.com"
    },
    {
      index: 1,
      imgSrc: "./assets/img/demo.gif",
      title: "KidzToPros",
      desc1: `KidzToPros is a utility app for professional instructors that work for the KidzToPros service. The app 
      would end up helping the company in managing the instructors by providing the company with location updates 
      depending on the instructor's schedule. The app also includes notifications so that the company could easily 
      communicate with the instructor`,
      desc2: `I was given a 3 month deadline to finish an minimum viable product for this mobile application. 
      I used React-Native to build the app for both iOS and Android. At the end of 3 monthes, the app was live in the 
      Google Play Store and the App Store`,
      href: "https://play.google.com/store/apps/details?id=com.ktpreact",
      domain: "Google Play Store"
    },
    {
      index: 2,
      imgSrc: "./assets/img/RD.PNG",
      title: "Ronin Dev Website",
      desc1: `Ronin Dev is a web development team for hire. Ronin is composed of 4 full stack developers,
        including George. They can build out your idea to make it become a reality.`,
      desc2: `This website was built out by me, for my development team. I used Materialize and jQuery to build it out.`,
      href: "http://ronindevsquad.com",
      domain: "ronindevsquad.com"
    },
    {
      index: 3,
      imgSrc: "./assets/img/GDND.PNG",
      title: "GDND",
      desc1: `GDND is a platform where contractors and suppliers could connect for dirt services. Truckers would be able to
        find contract work for picking up or dropping off dirt. While contractors would be able to find truckers if they
        needed dirt removed from their site.`,
      desc2: `This app was built out over the course of a month and a half with a four man development team using Angular, Nodejs and MySQL.
        My role in this site was creating some custom dynamic styling for the page, pluggin in location services and deployment.`,
      href: "http://52.53.179.254",
      domain: "GDND site"
    },
    {
      index: 4,
      imgSrc: "./assets/img/FT.PNG",
      title: "Foodtrucks",
      desc1: `Foodtrucks is a webpage where, if you are in the San Fransisco area, you can find mobile foodtrucks based on time
        and day. You can create an account, leave ratings and even have it text you reminders for the trucks.`,
      desc2: `This was a school project that was given a 4 day work period.  Myself and one other classmate build this up in those four days
        using Python and MySQL. My role in this project was structuring the database as well as serve the front-end data from its
        RESTful routes, as well as deployment.`,
      href: "http://foodtrucks.zaks.pw",
      domain: "Foodtrucks site"
    },
    {
      index: 5,
      imgSrc: "./assets/img/hack.jpg",
      title: "Misc",
      desc1: `I see that you have clicked this far, thank you for your interest. I am always working on new projects and I will post them
        when I finish them.`,
      desc2: "I am proud of my work so if you would like to see what I did to complete them just click the link to my github profile below.",
      href: "https://github.com/FunkyGeorge?tab=repositories",
      domain: "Link to github"
    }
  ];
  curProject: Project = this.projects[0];

  changeSource(index: number) {
    this.curProject = this.projects[index];
  }

  ngOnInit() {
  }

}

class Project {
  index: number;
  imgSrc: string;
  title: string;
  desc1: string;
  desc2: string;
  href: string;
  domain: string;
}
