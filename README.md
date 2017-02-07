# CJUG PrimeNG Lightning Talk

This talk by [Glen Smith](http://blogs.bytecode.com.au/glen/) given at the [Canberra Java User Group](https://www.meetup.com/Canberra-Java-User-Group/events/236561364/) in Feb, 2017.


## What is PrimeNG?

* [PrimeNG](http://www.primefaces.org/primeng) is a Angular 2* Module from the creators of [PrimeFaces](http://www.primefaces.org).
* It offers a rich, themeable component library for UI Awesomeness
* It has a strong reputation for quality concerns and built in accessability (ala WCAG2/ARIA)
* Source code is nice to look at
* Ships new version on high churn but with backward compatability
* It will save you a ton of time, and give you a more consistent and beautiful UX

## Real Application Demo

* [Demonstrate PuppyMail](http://blogs.bytecode.com.au/projects/puppymail)  ([GitHub Source](https://github.com/glenasmith/puppymail))

## Coding Script

* Demonstrate the `talks.json` file that will show our data
* Run an `ng serve` blank angular table app

* Demonstrate the [Datatable](http://www.primefaces.org/primeng/#/datatable) documentation. Scroll down to implementation.

* Add to your `app.module.ts`:

```
    import {DataTableModule,SharedModule} from 'primeng/primeng';
```

* Then to your page markup

```
    <p-dataTable [value]="talks" *ngIf="talks">
        <p-column field="title" header="Title"></p-column>
        <p-column field="speaker" header="Speaker"></p-column>
        <p-column field="location" header="Location"></p-column>
        <p-column field="votes" header="Votes"></p-column>
    </p-dataTable>
```

* Make a column sortable, add an attribue to the p-column:

```
     sortable="true"
```

* Make a column filterable:

```
    filter='true' filterMatchMode='startsWith'
```

* Enhance the p-dataTable with some options:

```
    [paginator]="true" [rowsPerPageOptions]="[5,10,20]"
```

* Add a column reorder

```
    [reorderableColumns]="true" 
```

* Resize to show responsiveness

    Hit F12

* And a selection:

```
    [selectionMode]="'single'"
```

* Add an events

```
    (onRowSelect)="onSessionSelect()"
```


## Getting Growls

* Add the growl module

```
    import {GrowlModule} from 'primeng/primeng';
```

* Add messages to your page

```
    <p-growl [value]="messages"></p-growl>
```

* Add code to your backing bean

```
    import {Message} from 'primeng/primeng';

    messages: Message[] = [];

    this.messages.push({severity:'info', summary:'Info Message', detail:'PrimeNG rocks'});
```


## Grabbing A Chart


* Import the library

```
    import {ChartModule} from 'primeng/primeng';
```

* Add the markup:

```
    <p-chart type="doughnut" [data]="chartData"></p-chart>
```






## About this Project

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.30.

