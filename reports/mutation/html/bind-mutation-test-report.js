document.querySelector('mutation-test-report-app').report = {"files":{"/Users/svelasquezg/Documents/personal/mutation-demo/apps/demo2/src/app/app.module.ts":{"language":"typescript","mutants":[{"id":"4","location":{"end":{"column":2,"line":13},"start":{"column":11,"line":7}},"mutatorName":"ObjectLiteral","replacement":"{}","status":"Survived"},{"id":"5","location":{"end":{"column":31,"line":8},"start":{"column":17,"line":8}},"mutatorName":"ArrayLiteral","replacement":"[]","status":"Survived"},{"id":"6","location":{"end":{"column":51,"line":9},"start":{"column":12,"line":9}},"mutatorName":"ArrayLiteral","replacement":"[]","status":"Survived"},{"id":"7","location":{"end":{"column":16,"line":10},"start":{"column":14,"line":10}},"mutatorName":"ArrayLiteral","replacement":"['Stryker was here']","status":"Survived"},{"id":"8","location":{"end":{"column":28,"line":11},"start":{"column":14,"line":11}},"mutatorName":"ArrayLiteral","replacement":"[]","status":"Survived"},{"id":"9","location":{"end":{"column":37,"line":12},"start":{"column":12,"line":12}},"mutatorName":"ArrayLiteral","replacement":"[]","status":"Survived"}],"source":"import { BrowserModule } from '@angular/platform-browser';\nimport { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';\n\nimport { AppComponent } from './app.component';\nimport { ComponentsSampleModule } from '@mutation-demo/components-sample';\n\n@NgModule({\n  declarations: [AppComponent],\n  imports: [BrowserModule, ComponentsSampleModule],\n  providers: [],\n  bootstrap: [AppComponent],\n  schemas: [ CUSTOM_ELEMENTS_SCHEMA]\n})\nexport class AppModule {}\n"},"/Users/svelasquezg/Documents/personal/mutation-demo/apps/demo2/src/app/app.component.ts":{"language":"typescript","mutants":[{"id":"1","location":{"end":{"column":33,"line":4},"start":{"column":13,"line":4}},"mutatorName":"StringLiteral","replacement":"\"\"","status":"Survived"},{"id":"0","location":{"end":{"column":2,"line":8},"start":{"column":12,"line":3}},"mutatorName":"ObjectLiteral","replacement":"{}","status":"Killed"},{"id":"3","location":{"end":{"column":18,"line":10},"start":{"column":11,"line":10}},"mutatorName":"StringLiteral","replacement":"\"\"","status":"Killed"},{"id":"2","location":{"end":{"column":38,"line":6},"start":{"column":16,"line":6}},"mutatorName":"StringLiteral","replacement":"\"\"","status":"Killed"}],"source":"import { Component } from '@angular/core';\n\n@Component({\n  selector: 'mutation-demo-root',\n  // template: '<h1> Welcome to {{title}}! </h1>',\n  templateUrl: './app.component.html',\n  // styleUrls: ['./app.component.scss']\n})\nexport class AppComponent {\n  title = 'demo2';\n}\n"}},"schemaVersion":"1.0","thresholds":{"break":null,"high":80,"low":60}};