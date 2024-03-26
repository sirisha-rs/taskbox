(self.webpackChunktaskbox=self.webpackChunktaskbox||[]).push([[63],{"./src/app/components/pure-task-list.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let PureTaskListComponent=class PureTaskListComponent{constructor(){this.tasksInOrder=[],this.loading=!1,this.onPinTask=new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter,this.onArchiveTask=new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter}set tasks(arr){const filteredTasks=[...arr.filter((t=>"TASK_PINNED"===t.state)),...arr.filter((t=>"TASK_PINNED"!==t.state))].filter((t=>"TASK_INBOX"===t.state||"TASK_PINNED"===t.state));this.tasksInOrder=filteredTasks.filter((t=>"TASK_INBOX"===t.state||"TASK_PINNED"===t.state))}static#_=this.propDecorators={loading:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],onPinTask:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Output}],onArchiveTask:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Output}],tasks:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}]}};PureTaskListComponent=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Component)({selector:"app-pure-task-list",template:'\n    <div class="list-items">\n      <app-task\n        *ngFor="let task of tasksInOrder"\n        [task]="task"\n        (onArchiveTask)="onArchiveTask.emit($event)"\n        (onPinTask)="onPinTask.emit($event)"\n      >\n      </app-task>\n      <div\n        *ngIf="tasksInOrder.length === 0 && !loading"\n        class="wrapper-message"\n      >\n        <span class="icon-check"></span>\n        <p class="title-message">You have no tasks</p>\n        <p class="subtitle-message">Sit back and relax</p>\n      </div>\n      <div *ngIf="loading">\n        <div *ngFor="let i of [1, 2, 3, 4, 5, 6]" class="loading-item">\n          <span class="glow-checkbox"></span>\n          <span class="glow-text">\n            <span>Loading</span> <span>cool</span> <span>state</span>\n          </span>\n        </div>\n      </div>\n    </div>\n  '})],PureTaskListComponent);const __WEBPACK_DEFAULT_EXPORT__=PureTaskListComponent},"./src/app/components/task.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let TaskComponent=class TaskComponent{constructor(){this.onPinTask=new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter,this.onArchiveTask=new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter}onPin(id){this.onPinTask.emit(id)}onArchive(id){this.onArchiveTask.emit(id)}static#_=this.propDecorators={task:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],onPinTask:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Output}],onArchiveTask:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Output}]}};TaskComponent=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Component)({selector:"app-task",template:'\n    <div class="list-item {{ task?.state }}">\n      <label\n        [attr.aria-label]="\'archiveTask-\' + task?.id"\n        for="checked-{{ task?.id }}"\n        class="checkbox"\n      >\n        <input\n          type="checkbox"\n          disabled="true"\n          [defaultChecked]="task?.state === \'TASK_ARCHIVED\'"\n          name="checked-{{ task?.id }}"\n          id="checked-{{ task?.id }}"\n        />\n        <span class="checkbox-custom" (click)="onArchive(task?.id)"></span>\n      </label>\n      <label\n        [attr.aria-label]="task?.title + \'\'"\n        for="title-{{ task?.id }}"\n        class="title"\n      >\n        <input\n          type="text"\n          [value]="task?.title"\n          readonly="true"\n          id="title-{{ task?.id }}"\n          name="title-{{ task?.id }}"\n          placeholder="Input title"\n        />\n      </label>\n      <button\n        *ngIf="task?.state !== \'TASK_ARCHIVED\'"\n        class="pin-button"\n        [attr.aria-label]="\'pinTask-\' + task?.id"\n        (click)="onPin(task?.id)"\n      >\n        <span class="icon-star"></span>\n      </button>\n    </div>\n  '})],TaskComponent);const __WEBPACK_DEFAULT_EXPORT__=TaskComponent},"./src/app/components/pure-inbox-screen.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Error:()=>Error,WithInteractions:()=>WithInteractions,__namedExportsOrder:()=>__namedExportsOrder,default:()=>pure_inbox_screen_stories});var asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),ngxs_store=__webpack_require__("./node_modules/@ngxs/store/fesm2015/ngxs-store.js"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),ngxs_store_operators=__webpack_require__("./node_modules/@ngxs/store/fesm2015/ngxs-store-operators.js");const actions_ARCHIVE_TASK="ARCHIVE_TASK",actions_PIN_TASK="PIN_TASK",actions_ERROR="APP_ERROR";class ArchiveTask{static#_=this.type=actions_ARCHIVE_TASK;constructor(payload){this.payload=payload}}class PinTask{static#_=this.type=actions_PIN_TASK;constructor(payload){this.payload=payload}}class AppError{static#_=this.type=actions_ERROR;constructor(payload){this.payload=payload}}let TasksState=class TasksState{static getError(state){return state.error}static getAllTasks(state){return state.tasks}pinTask({getState,setState},{payload}){const task=getState().tasks.find((task=>task.id===payload));if(task){const updatedTask={...task,state:"TASK_PINNED"};setState((0,ngxs_store_operators.r$)({tasks:(0,ngxs_store_operators.$G)((pinnedTask=>pinnedTask?.id===payload),updatedTask)}))}}archiveTask({getState,setState},{payload}){const task=getState().tasks.find((task=>task.id===payload));if(task){const updatedTask={...task,state:"TASK_ARCHIVED"};setState((0,ngxs_store_operators.r$)({tasks:(0,ngxs_store_operators.$G)((archivedTask=>archivedTask?.id===payload),updatedTask)}))}}setAppError({patchState,getState},{payload}){patchState({error:!getState().error})}};(0,tslib_es6.gn)([(0,ngxs_store.aU)(PinTask)],TasksState.prototype,"pinTask",null),(0,tslib_es6.gn)([(0,ngxs_store.aU)(ArchiveTask)],TasksState.prototype,"archiveTask",null),(0,tslib_es6.gn)([(0,ngxs_store.aU)(AppError)],TasksState.prototype,"setAppError",null),(0,tslib_es6.gn)([(0,ngxs_store.Qf)()],TasksState,"getError",null),(0,tslib_es6.gn)([(0,ngxs_store.Qf)()],TasksState,"getAllTasks",null),TasksState=(0,tslib_es6.gn)([(0,ngxs_store.ZM)({name:"taskbox",defaults:{tasks:[{id:"1",title:"Something",state:"TASK_INBOX"},{id:"2",title:"Something more",state:"TASK_INBOX"},{id:"3",title:"Something else",state:"TASK_INBOX"},{id:"4",title:"Something again",state:"TASK_INBOX"}],status:"idle",error:!1}}),(0,core.Injectable)()],TasksState);var dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),test_dist=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs");let PureInboxScreenComponent=class PureInboxScreenComponent{static#_=this.propDecorators={error:[{type:core.Input}]}};PureInboxScreenComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"app-pure-inbox-screen",template:'\n    <div *ngIf="error" class="page lists-show">\n      <div class="wrapper-message">\n        <span class="icon-face-sad"></span>\n        <p class="title-message">Oh no!</p>\n        <p class="subtitle-message">Something went wrong</p>\n      </div>\n    </div>\n\n    <div *ngIf="!error" class="page lists-show">\n      <nav>\n        <h1 class="title-page">Taskbox</h1>\n      </nav>\n      <app-task-list></app-task-list>\n    </div>\n  '})],PureInboxScreenComponent);const pure_inbox_screen_component=PureInboxScreenComponent;var task_component=__webpack_require__("./src/app/components/task.component.ts");let TaskListComponent=class TaskListComponent{constructor(store){this.store=store,this.tasks$=store.select((state=>state.taskbox.tasks))}archiveTask(id){this.store.dispatch(new ArchiveTask(id))}pinTask(id){this.store.dispatch(new PinTask(id))}static#_=this.ctorParameters=()=>[{type:ngxs_store.yh}]};TaskListComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"app-task-list",template:'\n    <app-pure-task-list\n      [tasks]="tasks$ | async"\n      (onArchiveTask)="archiveTask($event)"\n      (onPinTask)="pinTask($event)"\n    ></app-pure-task-list>\n  '})],TaskListComponent);const task_list_component=TaskListComponent;var pure_task_list_component=__webpack_require__("./src/app/components/pure-task-list.component.ts");let TaskModule=class TaskModule{};TaskModule=(0,tslib_es6.gn)([(0,core.NgModule)({imports:[common.CommonModule,ngxs_store.$l.forFeature([TasksState])],exports:[task_component.Z,task_list_component],declarations:[task_component.Z,task_list_component,pure_task_list_component.Z],providers:[]})],TaskModule);const pure_inbox_screen_stories={component:pure_inbox_screen_component,title:"PureInboxScreen",tags:["autodocs"],decorators:[(0,dist.moduleMetadata)({imports:[common.CommonModule,TaskModule]}),(0,dist.applicationConfig)({providers:[ngxs_store.yh,(0,core.importProvidersFrom)(ngxs_store.$l.forRoot([TasksState]))]})]},Default={},Error={args:{error:!0}},WithInteractions={play:(_ref=(0,asyncToGenerator.Z)((function*({canvasElement}){const canvas=(0,test_dist.uh)(canvasElement);yield test_dist.BX.click(canvas.getByLabelText("pinTask-1")),yield test_dist.BX.click(canvas.getByLabelText("pinTask-3"))})),function play(_x){return _ref.apply(this,arguments)})};var _ref;Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}},Error.parameters={...Error.parameters,docs:{...Error.parameters?.docs,source:{originalSource:"{\n  args: {\n    error: true\n  }\n}",...Error.parameters?.docs?.source}}},WithInteractions.parameters={...WithInteractions.parameters,docs:{...WithInteractions.parameters?.docs,source:{originalSource:"{\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // Simulates pinning the first task\n    await fireEvent.click(canvas.getByLabelText('pinTask-1'));\n    // Simulates pinning the third task\n    await fireEvent.click(canvas.getByLabelText('pinTask-3'));\n  }\n}",...WithInteractions.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Error","WithInteractions"]},"./node_modules/@storybook/instrumenter/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/instrumenter/dist sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/test/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/test/dist sync recursive",module.exports=webpackEmptyContext}}]);