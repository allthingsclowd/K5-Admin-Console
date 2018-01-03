webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container-fluid {\r\n  margin-top: 30px;\r\n}\r\n\r\ninput.ng-invalid.ng-touched {\r\n  border: 1px solid red;\r\n}\r\n\r\n.form-control.ng-invalid.ng-touched {\r\n  border: 1px solid red;\r\n}\r\n\r\n.form-control {\r\n  overflow-y: auto;\r\n}\r\n\r\n\r\n.brand {\r\n    position: relative;\r\n    left: 50%;\r\n    margin-left: -50px !important;  /* 50% of your logo width */\r\n    display: block; \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "    <div class=\"container-fluid\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-12\">\r\n\t\t\t<img alt=\"Fujitsu K5 Logo\" src=\"https://www.fujitsu.com/uk/Images/K5-climber-580x224_tcm23-2619235.jpg\" class=\"img-responsive center-block img-rounded\">\r\n\t\t</div>\r\n\t</div>\r\n    <div class=\"container-fluid\">\r\n\t\t<app-login *ngIf=\"!loggedIn\"></app-login>\r\n\t\t<div>\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-md-12 text-center\">\r\n\t\t\t\t\t\t<!-- <app-logout *ngIf=\"loggedIn\"></app-logout> -->\r\n\t\t\t\t\t\t<app-project *ngIf=\"loggedIn && userProjects\" ></app-project>\r\n\t\t\t\t\t</div>\t\t\t\t\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<app-project-panel *ngIf=\"loggedIn && contractProjects\"></app-project-panel>\r\n\t</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_identity_service__ = __webpack_require__("../../../../../src/app/services/identity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { FormControl, FormGroup, Validators } from '@angular/forms';
var AppComponent = (function () {
    function AppComponent(identityService) {
        this.identityService = identityService;
        this.loggedIn = false;
        this.userProjects = null;
        this.currentProject = null;
        this.contractProjects = null;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.identityService.loggedIn.subscribe(function (status) { return _this.loggedIn = status; });
        this.identityService.userProjects.subscribe(function (currentProjects) { return _this.userProjects = currentProjects; });
        this.identityService.currentProject.subscribe(function (selectedProject) { return _this.currentProject = selectedProject; });
        this.identityService.contractProjects.subscribe(function (projects) { return _this.contractProjects = projects; });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_5" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_identity_service__["a" /* IdentityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_identity_service__["a" /* IdentityService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_ipsecvpn_service__ = __webpack_require__("../../../../../src/app/services/ipsecvpn.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_cloudvisualised_service__ = __webpack_require__("../../../../../src/app/services/cloudvisualised.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_network_service__ = __webpack_require__("../../../../../src/app/services/network.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_password_management_service__ = __webpack_require__("../../../../../src/app/services/password-management.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_compute_service__ = __webpack_require__("../../../../../src/app/services/compute.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_identity_service__ = __webpack_require__("../../../../../src/app/services/identity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_utility_service__ = __webpack_require__("../../../../../src/app/services/utility.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_stack_service__ = __webpack_require__("../../../../../src/app/services/stack.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_sort_objects_by_name_pipe__ = __webpack_require__("../../../../../src/app/services/sort-objects-by-name.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__login_component__ = __webpack_require__("../../../../../src/app/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__server_component__ = __webpack_require__("../../../../../src/app/server.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__network_component__ = __webpack_require__("../../../../../src/app/network.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__router_component__ = __webpack_require__("../../../../../src/app/router.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__project_component__ = __webpack_require__("../../../../../src/app/project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_display_object_pipe__ = __webpack_require__("../../../../../src/app/services/display-object.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_convert_subset2_array_pipe__ = __webpack_require__("../../../../../src/app/services/convert-subset2-array.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_remove_quotes_pipe__ = __webpack_require__("../../../../../src/app/services/remove-quotes.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__logout_component__ = __webpack_require__("../../../../../src/app/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__project_panel_component__ = __webpack_require__("../../../../../src/app/project-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_stack_sorter_pipe__ = __webpack_require__("../../../../../src/app/services/stack-sorter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_convert_user_idto_name_pipe__ = __webpack_require__("../../../../../src/app/services/convert-user-idto-name.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_convert_role_idto_name_pipe__ = __webpack_require__("../../../../../src/app/services/convert-role-idto-name.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_convert_group_idto_name_pipe__ = __webpack_require__("../../../../../src/app/services/convert-group-idto-name.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_convert_project_idto_name_pipe__ = __webpack_require__("../../../../../src/app/services/convert-project-idto-name.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__user_management_component__ = __webpack_require__("../../../../../src/app/user-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_user_maintenance_service__ = __webpack_require__("../../../../../src/app/services/user-maintenance.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__loadbalancer_component__ = __webpack_require__("../../../../../src/app/loadbalancer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_loadbalancer_service__ = __webpack_require__("../../../../../src/app/services/loadbalancer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__cloudvisualised_component__ = __webpack_require__("../../../../../src/app/cloudvisualised.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ipsecvpn_component__ = __webpack_require__("../../../../../src/app/ipsecvpn.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_13__services_sort_objects_by_name_pipe__["a" /* SortObjectsByNamePipe */],
            __WEBPACK_IMPORTED_MODULE_14__login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_15__server_component__["a" /* ServerComponent */],
            __WEBPACK_IMPORTED_MODULE_16__network_component__["a" /* NetworkComponent */],
            __WEBPACK_IMPORTED_MODULE_17__router_component__["a" /* RouterComponent */],
            __WEBPACK_IMPORTED_MODULE_18__project_component__["a" /* ProjectComponent */],
            __WEBPACK_IMPORTED_MODULE_19__services_display_object_pipe__["a" /* DisplayObjectPipe */],
            __WEBPACK_IMPORTED_MODULE_20__services_convert_subset2_array_pipe__["a" /* ConvertSubset2ArrayPipe */],
            __WEBPACK_IMPORTED_MODULE_21__services_remove_quotes_pipe__["a" /* RemoveQuotesPipe */],
            __WEBPACK_IMPORTED_MODULE_22__logout_component__["a" /* LogoutComponent */],
            __WEBPACK_IMPORTED_MODULE_23__project_panel_component__["a" /* ProjectPanelComponent */],
            __WEBPACK_IMPORTED_MODULE_24__services_stack_sorter_pipe__["a" /* StackSorterPipe */],
            __WEBPACK_IMPORTED_MODULE_25__services_convert_user_idto_name_pipe__["a" /* ConvertUserIDtoNamePipe */],
            __WEBPACK_IMPORTED_MODULE_26__services_convert_role_idto_name_pipe__["a" /* ConvertRoleIDtoNamePipe */],
            __WEBPACK_IMPORTED_MODULE_27__services_convert_group_idto_name_pipe__["a" /* ConvertGroupIDtoNamePipe */],
            __WEBPACK_IMPORTED_MODULE_28__services_convert_project_idto_name_pipe__["a" /* ConvertProjectIDtoNamePipe */],
            __WEBPACK_IMPORTED_MODULE_29__user_management_component__["a" /* UserManagementComponent */],
            __WEBPACK_IMPORTED_MODULE_31__loadbalancer_component__["a" /* LoadbalancerComponent */],
            __WEBPACK_IMPORTED_MODULE_33__cloudvisualised_component__["a" /* CloudvisualisedComponent */],
            __WEBPACK_IMPORTED_MODULE_34__ipsecvpn_component__["a" /* IpsecvpnComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_forms__["a" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_http__["a" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__services_identity_service__["a" /* IdentityService */],
            __WEBPACK_IMPORTED_MODULE_6__services_utility_service__["a" /* UtilityService */],
            __WEBPACK_IMPORTED_MODULE_7__services_stack_service__["a" /* StackService */],
            __WEBPACK_IMPORTED_MODULE_4__services_compute_service__["a" /* ComputeService */],
            __WEBPACK_IMPORTED_MODULE_3__services_password_management_service__["a" /* PasswordManagementService */],
            __WEBPACK_IMPORTED_MODULE_30__services_user_maintenance_service__["a" /* UserMaintenanceService */],
            __WEBPACK_IMPORTED_MODULE_32__services_loadbalancer_service__["a" /* LoadbalancerService */],
            __WEBPACK_IMPORTED_MODULE_2__services_network_service__["a" /* NetworkService */],
            __WEBPACK_IMPORTED_MODULE_1__services_cloudvisualised_service__["a" /* CloudvisualisedService */],
            __WEBPACK_IMPORTED_MODULE_0__services_ipsecvpn_service__["a" /* IpsecvpnService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/cloudvisualised.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Styles go here */\r\n\r\n/* Styles go here */\r\n\r\n.links line {\r\n    stroke: #999;\r\n    stroke-opacity: 0.6;\r\n  }\r\n  \r\n  .nodes circle {\r\n    stroke: #fff;\r\n    stroke-width: 1.5px;\r\n  }\r\n\r\n#cloudData {\r\n  margin-left:auto;\r\n  margin-right:auto; \r\n  display:block;\r\n  /* border: 2px solid red; */\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cloudvisualised.component.html":
/***/ (function(module, exports) {

module.exports = "<div >\r\n    <svg id=\"cloudData\" width=\"80%\" height=\"600\"></svg>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/cloudvisualised.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_cloudvisualised_service__ = __webpack_require__("../../../../../src/app/services/cloudvisualised.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_selection__ = __webpack_require__("../../../../d3-selection/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_force__ = __webpack_require__("../../../../d3-force/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_d3_scale__ = __webpack_require__("../../../../d3-scale/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_d3_drag__ = __webpack_require__("../../../../d3-drag/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloudvisualisedComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CloudvisualisedComponent = (function () {
    function CloudvisualisedComponent(cloudvisualisedService) {
        var _this = this;
        this.cloudvisualisedService = cloudvisualisedService;
        this.cloudvisualisedService.currentVisualData.subscribe(function (newData) { return _this.nodeDetails = newData; });
    }
    CloudvisualisedComponent.prototype.ngOnInit = function () {
    };
    CloudvisualisedComponent.prototype.ngAfterViewInit = function () {
        //console.log('START OF CREATECHART IN CHART');
        this.svg = __WEBPACK_IMPORTED_MODULE_2_d3_selection__["a" /* select */]('svg');
        this.width = +this.svg.attr('width');
        this.height = +this.svg.attr('height');
        this.radius = 5;
        console.log('Height & Width');
        console.log(this.height);
        console.log(this.width);
        // Original data
        var dataset = this.nodeDetails;
        // Initialize a simple force layout, using the nodes and edges in dataset
        this.color = __WEBPACK_IMPORTED_MODULE_4_d3_scale__["a" /* scaleOrdinal */](__WEBPACK_IMPORTED_MODULE_4_d3_scale__["b" /* schemeCategory10 */]);
        var networkCenter = __WEBPACK_IMPORTED_MODULE_3_d3_force__["a" /* forceCenter */]().x(250).y(250);
        var modulePosition = {
            "2": { x: 0, y: 0 },
            "3": { x: 250, y: 25 },
            "1": { x: 0, y: 250 }
        };
        //Make the x-position equal to the x-position specified in the module positioning object or, if not in
        //the hash, then set it to 250
        var forceX = __WEBPACK_IMPORTED_MODULE_3_d3_force__["b" /* forceX */](function (d) { return modulePosition[d.module] ? modulePosition[d.module].x : 250; })
            .strength(0.05);
        //Same for forceY--these act as a gravity parameter so the different strength determines how closely
        //the individual nodes are pulled to the center of their module position
        var forceY = __WEBPACK_IMPORTED_MODULE_3_d3_force__["c" /* forceY */](function (d) { return modulePosition[d.module] ? modulePosition[d.module].y : 250; })
            .strength(0.05);
        this.simulation = __WEBPACK_IMPORTED_MODULE_3_d3_force__["d" /* forceSimulation */]()
            .force('link', __WEBPACK_IMPORTED_MODULE_3_d3_force__["e" /* forceLink */]().id(function (d) { return d.index; }))
            .force('charge', __WEBPACK_IMPORTED_MODULE_3_d3_force__["f" /* forceManyBody */]().strength(-150).distanceMax(100))
            .force('center', networkCenter)
            .force("x", forceX)
            .force("y", forceY);
        // this.render(this.testdata);
        //console.log('Bananas');
        //console.log(this.testdata);
        //console.log(this.cloudvisualisedService.convertToD3(this.nodeDetails));
        this.render(this.nodeDetails);
    };
    CloudvisualisedComponent.prototype.ticked = function () {
        this.link
            .attr('x1', function (d) { return d.source.x; })
            .attr('y1', function (d) { return d.source.y; })
            .attr('x2', function (d) { return d.target.x; })
            .attr('y2', function (d) { return d.target.y; });
        //console.log(this.link);
        this.node
            .attr("transform", function (d) { return "translate(" + d.x + "," + d.y + ")"; });
        //console.log(this.node);
    };
    CloudvisualisedComponent.prototype.ngOnDestroy = function () {
    };
    CloudvisualisedComponent.prototype.ngOnChanges = function () {
    };
    CloudvisualisedComponent.prototype.render = function (graph) {
        var _this = this;
        console.log('HELEN');
        console.log(graph.nodes);
        console.log(graph.links);
        this.link = this.svg.append('g')
            .attr('class', 'links')
            .selectAll('line')
            .data(graph.links)
            .enter().append('line')
            .attr('stroke-width', function (d) { return Math.sqrt(d.weight); });
        this.node = this.svg.append("g")
            .attr("class", "nodes")
            .selectAll("text")
            .data(graph.nodes)
            .enter().append("text")
            .text(function (d) {
            console.log(d.type);
            switch (d.type) {
                case 'network': {
                    return '\uf0c2';
                }
                case 'port: network': {
                    return '\uf0a9';
                }
                case 'subnetwork': {
                    return '\uf18e';
                }
                case 'router': {
                    return '\uf25d';
                }
                case 'port: compute': {
                    return '\uf108';
                }
                case 'port: dhcp': {
                    return '\uf0cb';
                }
                case 'lbaas': {
                    return '\uf24e';
                }
                default: {
                    return '\uf188';
                }
            }
        })
            .attr("x", -8)
            .attr("y", 0)
            .attr("width", 16)
            .attr("height", 16)
            .attr('font-family', 'FontAwesome')
            .attr('font-size', function (d) { return d.weight + 'em'; })
            .style("fill", function (d) { return _this.color(d.type); })
            .call(__WEBPACK_IMPORTED_MODULE_5_d3_drag__["a" /* drag */]()
            .on("start", function (d) { return _this.dragstarted(d); })
            .on("drag", function (d) { return _this.dragged(d); })
            .on("end", function (d) { return _this.dragended(d); }));
        this.node.append("title")
            .text(function (d) { return d.name; });
        // this.node.append("title")
        //   .style("text-anchor", "middle")
        //   .attr("y", 3)
        //   .style("font-size", "8px")
        //   .text(function (d) {return d.name})
        //   .style("pointer-events", "none");
        // this.node.append("title")
        // .attr("dx", 12)
        // .attr("dy", ".35em")
        // .text(function(d) { return d.name });
        this.simulation
            .nodes(graph.nodes)
            .on('tick', function () { return _this.ticked(); });
        this.simulation.force('link')
            .links(graph.links);
    };
    CloudvisualisedComponent.prototype.dragged = function (d) {
        d.fx = __WEBPACK_IMPORTED_MODULE_2_d3_selection__["b" /* event */].x;
        d.fy = __WEBPACK_IMPORTED_MODULE_2_d3_selection__["b" /* event */].y;
    };
    CloudvisualisedComponent.prototype.dragended = function (d) {
        if (!__WEBPACK_IMPORTED_MODULE_2_d3_selection__["b" /* event */].active) {
            this.simulation.alphaTarget(0);
        }
        d.fx = null;
        d.fy = null;
    };
    CloudvisualisedComponent.prototype.dragstarted = function (d) {
        if (!__WEBPACK_IMPORTED_MODULE_2_d3_selection__["b" /* event */].active) {
            this.simulation.alphaTarget(0.3).restart();
        }
        d.fx = d.x;
        d.fy = d.y;
    };
    return CloudvisualisedComponent;
}());
CloudvisualisedComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_5" /* Component */])({
        selector: 'app-cloudvisualised',
        template: __webpack_require__("../../../../../src/app/cloudvisualised.component.html"),
        styles: [__webpack_require__("../../../../../src/app/cloudvisualised.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ViewEncapsulation */].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_cloudvisualised_service__["a" /* CloudvisualisedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_cloudvisualised_service__["a" /* CloudvisualisedService */]) === "function" && _a || Object])
], CloudvisualisedComponent);

var _a;
//# sourceMappingURL=cloudvisualised.component.js.map

/***/ }),

/***/ "../../../../../src/app/ipsecvpn.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fix-panel {\r\n    min-height: 200px;\r\n    max-height: 200px;\r\n    overflow-y: scroll;\r\n    overflow-x: scroll;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ipsecvpn.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf='vpnServices && ipsecConnections && ipsecPolicies && ikePolicies' class=\"container-fluid\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-3\">\r\n\t\t\t<div class=\"panel panel-info\">\r\n\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\tVPN Services\r\n\t\t\t\t\t</h3>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"fix-panel panel-body\">\r\n\t\t\t\t\t<div *ngFor='let service of vpnServices.vpnservices'>\r\n            <li    value=\"service | json | removeQuotes\"\r\n                    (click)=\"vpnChange(service)\">{{service.name | json | removeQuotes}}</li>\r\n          </div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"panel-footer\">\r\n\t\t\t\t\tTotal {{ vpnServices.vpnservices.length }}\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-md-3\">\r\n\t\t\t<div class=\"panel panel-info\">\r\n\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\tVPN Service Detail\r\n\t\t\t\t\t</h3>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"fix-panel panel-body\">\r\n\t\t\t\t\t{{vpnService | json | removeQuotes }}\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-md-3\">\r\n\t\t\t<div class=\"panel panel-warning\">\r\n\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\tVPN Service Update/Delete\r\n\t\t\t\t\t</h3>\r\n        </div>\r\n        <form [formGroup]=\"amendVpnServiceForm\" #amendVPNService=\"ngForm\" >\r\n          <div class=\"form-group panel-body\">\r\n\t\t\t\t\t\t\t<label for=\"name\">Name</label>\r\n\t\t\t\t\t\t\t<input id=\"name\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t formControlName=\"name\" required >\r\n\t\r\n\t\t\t\t\t\t\t<label for=\"description\">Description</label>\r\n\t\t\t\t\t\t\t<input id=\"description\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\tformControlName=\"description\">\r\n\t\r\n\t\t\t\t\t\t\t<label for=\"adminState\">Admin State</label>\r\n\t\t\t\t\t\t\t<select id=\"adminState\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"adminState\" required >\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let state of adminState\" [value]=\"state\">{{state}}</option>\r\n\t\t\t\t\t\t\t</select>\r\n\r\n          </div>\r\n          <div class=\"panel-footer\">\r\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-info btn-lg btn-block\" \r\n\t\t\t\t\t\t\t\t\t\t\t[disabled]=\"amendVpnServiceForm.invalid\"\r\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"updateVpnService(vpnService)\">\r\n              Update\r\n            </button> \r\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger btn-lg btn-block\" \r\n\t\t\t\t\t\t\t\t\t\t\t[disabled]=\"amendVpnServiceForm.invalid\"\r\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"deleteVpnService()\">\r\n              Delete\r\n            </button>\r\n          </div>\r\n        </form>\r\n\t\t\t</div> \r\n\r\n\t\t</div>\r\n\t\t<div class=\"col-md-3\">\r\n\t\t\t<div class=\"panel panel-success\">\r\n\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\tAdd New VPN Service\r\n\t\t\t\t\t</h3>\r\n        </div>\r\n        <form [formGroup]=\"addVpnServiceForm\" #addVPNService=\"ngForm\">\r\n          <div class=\"form-group panel-body\">\r\n\t\t\t\t\t\t<label for=\"name\">Name</label>\r\n\t\t\t\t\t\t<input id=\"name\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t formControlName=\"name\" required >\r\n\r\n\t\t\t\t\t\t<label for=\"description\">Description</label>\r\n\t\t\t\t\t\t<input id=\"description\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\tformControlName=\"description\">\r\n\r\n\t\t\t\t\t\t<label for=\"subnet\">Subnet Id</label>\r\n\t\t\t\t\t\t<select id=\"subnet_id\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\tformControlName=\"subnet_id\" required >\r\n\t\t\t\t\t\t\t<option *ngFor=\"let subnet of subnets\" [value]=\"subnet.id\">{{subnet.name}}</option>\r\n\t\t\t\t\t\t</select>\r\n\r\n\t\t\t\t\t\t<label for=\"router\">Router Id</label>\r\n\t\t\t\t\t\t<select id=\"router_id\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\tformControlName=\"router_id\" required >\r\n\t\t\t\t\t\t\t<option *ngFor=\"let router of routers\" [value]=\"router.id\">{{router.name}}</option>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t<label for=\"availabilityZone\">Availability Zone</label>\r\n\t\t\t\t\t\t<select id=\"availabilityZone\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\tformControlName=\"availability_zone\" required >\r\n\t\t\t\t\t\t\t<option *ngFor=\"let az of azones\" [value]=\"az\">{{az}}</option>\r\n\t\t\t\t\t\t</select>\r\n\r\n          </div>\r\n          <div class=\"panel-footer\">\r\n            <button type=\"button\" class=\"btn btn-success btn-lg btn-block\" \r\n\t\t\t\t\t\t\t\t[disabled]=\"addVpnServiceForm.invalid\"\r\n\t\t\t\t\t\t\t\t(click)=\"addVpnService()\">\r\n              Add\r\n            </button>\r\n          </div>\r\n        </form>\r\n\t\t\t</div> \r\n\r\n\t\t</div>\r\n  </div>\r\n  <hr>\r\n  <div class=\"row\">\r\n\t\t<div class=\"col-md-3\">\r\n\t\t\t<div class=\"panel panel-info\">\r\n\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\tIPSec Policies\r\n\t\t\t\t\t</h3>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"fix-panel panel-body\">\r\n          <div *ngFor='let policy of ipsecPolicies.ipsecpolicies'>\r\n            <li    value=\"policy | json | removeQuotes\"\r\n                    (click)=\"ipsecPolicyChange(policy)\">{{policy.name | json | removeQuotes}}</li>\r\n          </div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"panel-footer\">\r\n\t\t\t\t\tTotal {{ ipsecPolicies.ipsecpolicies.length }}\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-md-3\">\r\n\t\t\t<div class=\"panel panel-info\">\r\n\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\tIPSec Policy Detail\r\n\t\t\t\t\t</h3>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"fix-panel panel-body\">\r\n\t\t\t\t\t{{ ipsecPolicy | json | removeQuotes }}\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- <div class=\"panel-footer\">\r\n\t\t\t\t\tPanel footer\r\n\t\t\t\t</div> -->\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-md-3\">\r\n\t\t\t<div class=\"panel panel-warning\">\r\n\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\tIPSec Policy Update/Delete\r\n\t\t\t\t\t</h3>\r\n        </div>\r\n        <form [formGroup]=\"amendIpsecPolicyForm\" #amendPolicyForm=\"ngForm\">\r\n          <div class=\"panel-body\">\r\n\t\t\t\t\t\t\t<label for=\"name\">Name</label>\r\n\t\t\t\t\t\t\t<input id=\"name\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t formControlName=\"name\" required >\r\n\t\r\n\t\t\t\t\t\t\t<label for=\"description\">Description</label>\r\n\t\t\t\t\t\t\t<input id=\"description\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\tformControlName=\"description\" required >\r\n\t\r\n\t\t\t\t\t\t\t<label for=\"encryption_algorithm\">Encryption Algorithm</label>\r\n\t\t\t\t\t\t\t<select id=\"encryption_algorithm\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"encryption_algorithm\" required >\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let proto of encryption_algorithm\" [value]=\"proto\">{{proto}}</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\r\n\t\t\t\t\t\t\t<label for=\"pfs\">Perfect Forward Secrecy</label>\r\n\t\t\t\t\t\t\t<select id=\"pfs\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"pfs\" required >\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let group of pfs\" [value]=\"group\">{{group}}</option>\r\n\t\t\t\t\t\t\t</select>\r\n\r\n\t\t\t\t\t\t\t<label for=\"lifetime\">Lifetime of the SA</label>\r\n\t\t\t\t\t\t\t<input id=\"lifetime\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"ipsecLtValue\" required >\r\n\t\t\t\t\t\t\r\n          </div>\r\n          <div class=\"panel-footer\">\r\n            <button type=\"button\" class=\"btn btn-info btn-lg btn-block\" \r\n\t\t\t\t\t\t[disabled]=\"amendIpsecPolicyForm.invalid\"\r\n\t\t\t\t\t\t(click)=\"updateIpsecPolicy()\">\r\n              Update\r\n            </button> \r\n            <button type=\"button\" class=\"btn btn-danger btn-lg btn-block\" \r\n\t\t\t\t\t\t[disabled]=\"amendIpsecPolicyForm.invalid\"\r\n\t\t\t\t\t\t(click)=\"deleteIpsecPolicy()\">\r\n              Delete\r\n            </button>\r\n          </div>\r\n        </form>\r\n\t\t\t</div> \r\n\r\n\t\t</div>\r\n\t\t<div class=\"col-md-3\">\r\n\t\t\t<div class=\"panel panel-success\">\r\n\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\tAdd New IPSec Policy\r\n\t\t\t\t\t</h3>\r\n        </div>\r\n        <form [formGroup]=\"addIpsecPolicyForm\" #addPolicyForm=\"ngForm\">\r\n          <div class=\"form-group panel-body\">\r\n\t\t\t\t\t\t\t<label for=\"name\">Name</label>\r\n\t\t\t\t\t\t\t<input id=\"name\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t formControlName=\"name\" required >\r\n\t\r\n\t\t\t\t\t\t\t<label for=\"description\">Description</label>\r\n\t\t\t\t\t\t\t<input id=\"description\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\tformControlName=\"description\" required >\r\n\t\r\n\t\t\t\t\t\t\t<label for=\"transform_protocol\">Transform Protocol</label>\r\n\t\t\t\t\t\t\t<select id=\"transform_protocol\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"transform_protocol\" required >\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let protocol of transform_protocol\" [value]=\"protocol\">{{protocol}}</option>\r\n\t\t\t\t\t\t\t</select>\r\n\r\n\t\t\t\t\t\t\t<label for=\"auth_algorithm\">Authentication Algorithm</label>\r\n\t\t\t\t\t\t\t<select id=\"auth_algorithm\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\tformControlName=\"auth_algorithm\" required >\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let alg of auth_algorithm\" [value]=\"alg\">{{alg}}</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\r\n\t\t\t\t\t\t\t<label for=\"encapsulation_mode\">Encapsulation Mode</label>\r\n\t\t\t\t\t\t\t<select id=\"encapsulation_mode\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\tformControlName=\"encapsulation_mode\" required >\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let mode of encapsulation_mode\" [value]=\"mode\">{{mode}}</option>\r\n\t\t\t\t\t\t\t</select>\r\n\r\n\t\t\t\t\t\t\t<label for=\"encryption_algorithm\">Encryption Algorithm</label>\r\n\t\t\t\t\t\t\t<select id=\"encryption_algorithm\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"encryption_algorithm\" required >\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let proto of encryption_algorithm\" [value]=\"proto\">{{proto}}</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\r\n\t\t\t\t\t\t\t<label for=\"pfs\">Perfect Forward Secrecy</label>\r\n\t\t\t\t\t\t\t<select id=\"pfs\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"pfs\" required >\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let group of pfs\" [value]=\"group\">{{group}}</option>\r\n\t\t\t\t\t\t\t</select>\r\n\r\n\t\t\t\t\t\t\t<label for=\"lifetime\">Lifetime of the SA</label>\r\n\t\t\t\t\t\t\t<input id=\"lifetime\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"ipsecLtValue\" required >\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<label for=\"availabilityZone\">Availability Zone</label>\r\n\t\t\t\t\t\t\t<select id=\"availabilityZone\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\tformControlName=\"availability_zone\" required >\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let az of azones\" [value]=\"az\">{{az}}</option>\r\n\t\t\t\t\t\t\t</select>\r\n          </div>\r\n          <div class=\"panel-footer\">\r\n            <button type=\"button\" class=\"btn btn-success btn-lg btn-block\" \r\n\t\t\t\t\t\t[disabled]=\"addIpsecPolicyForm.invalid\"\r\n\t\t\t\t\t\t(click)=\"addIpsecPolicy()\">\r\n              Add\r\n            </button>\r\n          </div>\r\n        </form>  \r\n\t\t\t</div> \r\n\r\n\t\t</div>\r\n  </div>\r\n  <hr>\r\n  <div class=\"row\">\r\n\t\t<div class=\"col-md-3\">\r\n\t\t\t<div class=\"panel panel-info\">\r\n\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\tIKE Policies\r\n\t\t\t\t\t</h3>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"fix-panel panel-body\">\r\n\t\t\t\t\t\t<div *ngFor='let policy of ikePolicies.ikepolicies'>\r\n\t\t\t\t\t\t\t\t<li    value=\"policy | json | removeQuotes\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"ikePolicyChange(policy)\">{{policy.name | json | removeQuotes}}</li>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"panel-footer\">\r\n\t\t\t\t\t\tTotal {{ ikePolicies.ikepolicies.length }}\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-md-3\">\r\n\t\t\t<div class=\"panel panel-info\">\r\n\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\tIKE Policy\r\n\t\t\t\t\t</h3>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"fix-panel panel-body\">\r\n\t\t\t\t\t\t{{ ikePolicy | json | removeQuotes }}\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- <div class=\"panel-footer\">\r\n\t\t\t\t\tPanel footer\r\n\t\t\t\t</div> -->\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-md-3\">\r\n\t\t\t<div class=\"panel panel-warning\">\r\n\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\tIKE Policy Update/Delete\r\n\t\t\t\t\t</h3>\r\n        </div>\r\n        <form [formGroup]=\"amendIkePolicyForm\" >\r\n          <div class=\"panel-body\">\r\n\t\t\t\t\t\t\t<label for=\"name\">Name</label>\r\n\t\t\t\t\t\t\t<input id=\"name\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t formControlName=\"name\" required >\r\n\t\r\n\t\t\t\t\t\t\t<label for=\"description\">Description</label>\r\n\t\t\t\t\t\t\t<input id=\"description\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\tformControlName=\"description\" required >\r\n\t\r\n\t\t\t\t\t\t\t<label for=\"encryption_algorithm\">Encryption Algorithm</label>\r\n\t\t\t\t\t\t\t<select id=\"encryption_algorithm\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"encryption_algorithm\" required >\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let proto of encryption_algorithm\" [value]=\"proto\">{{proto}}</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\r\n\t\t\t\t\t\t\t<label for=\"pfs\">Perfect Forward Secrecy</label>\r\n\t\t\t\t\t\t\t<select id=\"pfs\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"pfs\" required >\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let group of pfs\" [value]=\"group\">{{group}}</option>\r\n\t\t\t\t\t\t\t</select>\r\n\r\n\t\t\t\t\t\t\t<label for=\"lifetime\">Lifetime of the SA</label>\r\n\t\t\t\t\t\t\t<input id=\"lifetime\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"ikeLtValue\" required >\r\n\r\n          </div>\r\n          <div class=\"panel-footer\">\r\n            <button type=\"button\" class=\"btn btn-info btn-lg btn-block\" \r\n\t\t\t\t\t\t[disabled]=\"amendIkePolicyForm.invalid\"\r\n\t\t\t\t\t\t(click)=\"updateIkePolicy()\">\r\n              Update\r\n            </button> \r\n            <button type=\"button\" class=\"btn btn-danger btn-lg btn-block\" \r\n\t\t\t\t\t\t[disabled]=\"amendIkePolicyForm.invalid\"\r\n\t\t\t\t\t\t(click)=\"deleteIkePolicy()\">\r\n              Delete\r\n            </button>\r\n          </div>\r\n        </form>\r\n\t\t\t</div> \r\n\r\n\t\t</div>\r\n\t\t<div class=\"col-md-3\">\r\n\t\t\t<div class=\"panel panel-success\">\r\n\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\tAdd New IKE Policy\r\n\t\t\t\t\t</h3>\r\n        </div>\r\n        <form [formGroup]=\"addIkePolicyForm\" >\r\n          <div class=\"form-group panel-body\">\r\n\t\t\t\t\t\t\t<label for=\"name\">Name</label>\r\n\t\t\t\t\t\t\t<input id=\"name\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t formControlName=\"name\" required >\r\n\t\r\n\t\t\t\t\t\t\t<label for=\"description\">Description</label>\r\n\t\t\t\t\t\t\t<input id=\"description\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\tformControlName=\"description\" required >\r\n\t\r\n\t\t\t\t\t\t\t<label for=\"phase1_negotiation_mode\">Phase 1 Negotiation Mode</label>\r\n\t\t\t\t\t\t\t<select id=\"phase1_negotiation_mode\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"phase1_negotiation_mode\" required >\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let mode of phase1_negotiation_mode\" [value]=\"mode\">{{mode}}</option>\r\n\t\t\t\t\t\t\t</select>\r\n\r\n\t\t\t\t\t\t\t<label for=\"auth_algorithm\">Authentication Algorithm</label>\r\n\t\t\t\t\t\t\t<select id=\"auth_algorithm\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\tformControlName=\"auth_algorithm\" required >\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let alg of auth_algorithm\" [value]=\"alg\">{{alg}}</option>\r\n\t\t\t\t\t\t\t</select>\r\n\r\n\t\t\t\t\t\t\t<label for=\"encryption_algorithm\">Encryption Algorithm</label>\r\n\t\t\t\t\t\t\t<select id=\"encryption_algorithm\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"encryption_algorithm\" required >\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let proto of encryption_algorithm\" [value]=\"proto\">{{proto}}</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\r\n\t\t\t\t\t\t\t<label for=\"pfs\">Perfect Forward Secrecy</label>\r\n\t\t\t\t\t\t\t<select id=\"pfs\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"pfs\" required >\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let group of pfs\" [value]=\"group\">{{group}}</option>\r\n\t\t\t\t\t\t\t</select>\r\n\r\n\t\t\t\t\t\t\t<label for=\"lifetime\">Lifetime of the SA</label>\r\n\t\t\t\t\t\t\t<input id=\"lifetime\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"ikeLtValue\" required >\r\n\r\n\t\t\t\t\t\t\t<label for=\"ike_version\">IKE Version</label>\r\n\t\t\t\t\t\t\t<select id=\"ike_version\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\tformControlName=\"ike_version\" required >\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let ver of ike_version\" [value]=\"ver\">{{ver}}</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<label for=\"availabilityZone\">Availability Zone</label>\r\n\t\t\t\t\t\t\t<select id=\"availabilityZone\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\tformControlName=\"availability_zone\" required >\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let az of azones\" [value]=\"az\">{{az}}</option>\r\n\t\t\t\t\t\t\t</select>\r\n          </div>\r\n          <div class=\"panel-footer\">\r\n            <button type=\"button\" class=\"btn btn-success btn-lg btn-block\" \r\n\t\t\t\t\t\t[disabled]=\"addIkePolicyForm.invalid\"\r\n\t\t\t\t\t\t(click)=\"addIkePolicy()\">\r\n              Add\r\n            </button>\r\n          </div>\r\n        </form>\r\n\t\t\t</div> \r\n\r\n\t\t</div>\r\n  </div>\r\n  <hr>\r\n  <div class=\"row\">\r\n\t\t<div class=\"col-md-3\">\r\n\t\t\t<div class=\"panel panel-info\">\r\n\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\tSite Connections\r\n\t\t\t\t\t</h3>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"fix-panel panel-body\">\r\n\t\t\t\t\t\t<div *ngFor='let connection of ipsecConnections.ipsec_site_connections'>\r\n\t\t\t\t\t\t\t\t<li    value=\"connection | json | removeQuotes\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"connectionChange(connection)\">{{connection.name | json | removeQuotes}}</li>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"panel-footer\">\r\n\t\t\t\t\tTotal {{ ipsecConnections.ipsec_site_connections.length }}\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-md-3\">\r\n\t\t\t<div class=\"panel panel-info\">\r\n\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\tSite Connection\r\n\t\t\t\t\t</h3>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"fix-panel panel-body\">\r\n\t\t\t\t\t\t{{ ipsecConnection | json | removeQuotes }}\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-md-3\">\r\n\t\t\t<div class=\"panel panel-warning\">\r\n\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\tSite Connection Update/Delete\r\n\t\t\t\t\t</h3>\r\n        </div>\r\n        <form [formGroup]=\"amendConnectionForm\" >\r\n          <div class=\"panel-body\">\r\n\t\t\t\t\t\t\t<label for=\"name\">Name</label>\r\n\t\t\t\t\t\t\t<input id=\"name\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t formControlName=\"name\" required >\r\n\t\r\n\t\t\t\t\t\t\t<label for=\"description\">Description</label>\r\n\t\t\t\t\t\t\t<input id=\"description\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\tformControlName=\"description\" required >\r\n\t\r\n\t\t\t\t\t\t\t<label for=\"psk\">Pre-Shared Key</label>\r\n\t\t\t\t\t\t\t<input id=\"psk\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t\ttype=\"password\" formControlName=\"psk\" required >\r\n\r\n\t\t\t\t\t\t\t<label for=\"initiator\">Initiator Type</label>\r\n\t\t\t\t\t\t\t<select id=\"initiator\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\tformControlName=\"initiator\" required >\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let direction of initiator\" [value]=\"direction\">{{direction}}</option>\r\n\t\t\t\t\t\t\t</select>\r\n\r\n\t\t\t\t\t\t\t<label for=\"peer_cidrs\">Peer CIDR [Note: One Only Supported]</label>\r\n\t\t\t\t\t\t\t<input id=\"peer_cidrs\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"peer_cidrs\" required >\r\n\r\n\t\t\t\t\t\t\t<label for=\"peer_address\">Peer Gateway IP Address</label>\r\n\t\t\t\t\t\t\t<input id=\"peer_address\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"peer_address\" required >\r\n\t\r\n\t\t\t\t\t\t\t<label for=\"peer_id\">Peer Router Id [Label - Use Peer Gateway]</label>\r\n\t\t\t\t\t\t\t<input id=\"peer_id\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"peer_id\" required >\r\n\r\n\t\t\t\t\t\t\t<label for=\"dpd_protocol\">Dead Peer Detection Protocol</label>\r\n\t\t\t\t\t\t\t<select id=\"dpd_protocol\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\tformControlName=\"dpd_protocol\" required >\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let protocol of dpdProtocol\" [value]=\"protocol\">{{protocol}}</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<label for=\"dpd_interval\">Dead Peer Detection Interval</label>\r\n\t\t\t\t\t\t\t<input id=\"dpd_interval\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\tformControlName=\"dpd_interval\" required >\r\n\r\n\t\t\t\t\t\t\t<label for=\"dpd_timeout\">Dead Peer Detection Timeout</label>\r\n\t\t\t\t\t\t\t<input id=\"dpd_timeout\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\tformControlName=\"dpd_timeout\" required >\r\n\r\n\t\t\t\t\t\t\t<label for=\"admin_state_up\">Admin State Up</label>\r\n\t\t\t\t\t\t\t<select id=\"admin_state_up\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\tformControlName=\"admin_state_up\" required >\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let state of adminState\" [value]=\"state\">{{state}}</option>\r\n\t\t\t\t\t\t\t</select>\r\n\r\n          </div>\r\n          <div class=\"panel-footer\">\r\n            <button type=\"button\" class=\"btn btn-info btn-lg btn-block\" \r\n\t\t\t\t\t\t[disabled]=\"amendConnectionForm.invalid\"\r\n\t\t\t\t\t\t(click)=\"updateSiteConnection()\">\r\n              Update\r\n            </button> \r\n            <button type=\"button\" class=\"btn btn-danger btn-lg btn-block\" \r\n\t\t\t\t\t\t[disabled]=\"amendConnectionForm.invalid\"\r\n\t\t\t\t\t\t(click)=\"deleteSiteConnection()\">\r\n              Delete\r\n            </button>\r\n          </div>\r\n        </form>\r\n\t\t\t</div> \r\n\r\n\t\t</div>\r\n\t\t<div class=\"col-md-3\">\r\n\t\t\t<div class=\"panel panel-success\">\r\n\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\tAdd New Site Connection\r\n\t\t\t\t\t</h3>\r\n        \t\t</div>\r\n        \t\t<form [formGroup]=\"addConnectionForm\" >\r\n          \t\t\t<div class=\"form-group panel-body\">\r\n\t\t\t\t\t\t\t<label for=\"name\">Name</label>\r\n\t\t\t\t\t\t\t<input id=\"name\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t formControlName=\"name\" required >\r\n\t\r\n\t\t\t\t\t\t\t<label for=\"description\">Description</label>\r\n\t\t\t\t\t\t\t<input id=\"description\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\tformControlName=\"description\" required >\r\n\t\r\n\t\t\t\t\t\t\t<label for=\"psk\">Pre-Shared Key</label>\r\n\t\t\t\t\t\t\t<input id=\"psk\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t\ttype=\"password\" formControlName=\"psk\" required >\r\n\r\n\t\t\t\t\t\t\t<label for=\"initiator\">Initiator Type</label>\r\n\t\t\t\t\t\t\t<select id=\"initiator\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\tformControlName=\"initiator\" required >\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let direction of initiator\" [value]=\"direction\">{{direction}}</option>\r\n\t\t\t\t\t\t\t</select>\r\n\r\n\t\t\t\t\t\t\t<label for=\"ikepolicy_id\">IKE Policy - Phase 1</label>\r\n\t\t\t\t\t\t\t<select id=\"ikepolicy_id\" class=\"form-control\"\r\n\t\t\t\t\t\t\tformControlName=\"ikepolicy_id\" required >\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let ikpolicy of ikePolicies.ikepolicies\" [value]=\"ikpolicy.id\">{{ikpolicy.name}} ({{ikpolicy.id}})</option>\r\n\t\t\t\t\t\t\t</select>\r\n\r\n\t\t\t\t\t\t\t<label for=\"ipsecpolicy_id\">IPSec Policy - Phase 2</label>\r\n\t\t\t\t\t\t\t<select id=\"ipsecpolicy_id\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"ipsecpolicy_id\" required >\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let secpolicy of ipsecPolicies.ipsecpolicies\" [value]=\"secpolicy.id\">{{secpolicy.name}}  ({{secpolicy.id}})</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<label for=\"vpnservice_id\">VPN Service</label>\r\n\t\t\t\t\t\t\t<select id=\"vpnservice_id\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\tformControlName=\"vpnservice_id\" required >\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let service of vpnServices.vpnservices\" [value]=\"service.id\">{{service.name}} ({{service.id}})</option>\r\n\t\t\t\t\t\t\t</select>\r\n\r\n\t\t\t\t\t\t\t<label for=\"peer_cidrs\">Peer CIDR [Note: One Only Supported]</label>\r\n\t\t\t\t\t\t\t<input id=\"peer_cidrs\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"peer_cidrs\" required >\r\n\r\n\t\t\t\t\t\t\t<label for=\"peer_address\">Peer Gateway IP Address</label>\r\n\t\t\t\t\t\t\t<input id=\"peer_address\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"peer_address\" required >\r\n\t\r\n\t\t\t\t\t\t\t<label for=\"peer_id\">Peer Router Id [Label - Use Peer Gateway]</label>\r\n\t\t\t\t\t\t\t<input id=\"peer_id\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"peer_id\" required >\r\n\r\n\t\t\t\t\t\t\t<label for=\"dpd_protocol\">Dead Peer Detection Protocol</label>\r\n\t\t\t\t\t\t\t<select id=\"dpd_protocol\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\tformControlName=\"dpd_protocol\" required >\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let protocol of dpdProtocol\" [value]=\"protocol\">{{protocol}}</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<label for=\"dpd_interval\">Dead Peer Detection Interval</label>\r\n\t\t\t\t\t\t\t<input id=\"dpd_interval\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\tformControlName=\"dpd_interval\" required >\r\n\r\n\t\t\t\t\t\t\t<label for=\"dpd_timeout\">Dead Peer Detection Timeout</label>\r\n\t\t\t\t\t\t\t<input id=\"dpd_timeout\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\tformControlName=\"dpd_timeout\" required >\r\n\r\n\t\t\t\t\t\t\t<label for=\"admin_state_up\">Admin State Up</label>\r\n\t\t\t\t\t\t\t<select id=\"admin_state_up\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\tformControlName=\"admin_state_up\" required >\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let state of adminState\" [value]=\"state\">{{state}}</option>\r\n\t\t\t\t\t\t\t</select>\r\n\r\n\t\t\t\t\t\t\t<label for=\"availabilityZone\">Availability Zone</label>\r\n\t\t\t\t\t\t\t<select id=\"availabilityZone\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\tformControlName=\"availability_zone\" required >\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let az of azones\" [value]=\"az\">{{az}}</option>\r\n\t\t\t\t\t\t\t</select>\r\n          \t\t</div>\r\n          \t\t<div class=\"panel-footer\">\r\n            \t\t<button type=\"button\" class=\"btn btn-success btn-lg btn-block\" \r\n\t\t\t\t\t\t[disabled]=\"addConnectionForm.invalid\"\r\n\t\t\t\t\t\t(click)=\"addSiteConnection()\">\r\n              \t\t\tAdd\r\n            \t\t</button>\r\n          \t\t</div>\r\n        \t</form>\r\n\t\t\t</div> \r\n\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/ipsecvpn.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_network_service__ = __webpack_require__("../../../../../src/app/services/network.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_identity_service__ = __webpack_require__("../../../../../src/app/services/identity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_ipsecvpn_service__ = __webpack_require__("../../../../../src/app/services/ipsecvpn.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IpsecvpnComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var IpsecvpnComponent = (function () {
    function IpsecvpnComponent(ipsecvpnService, identityService, networkService) {
        var _this = this;
        this.ipsecvpnService = ipsecvpnService;
        this.identityService = identityService;
        this.networkService = networkService;
        // api parameters
        this.defaultName = 'Enter resource name';
        this.defaultDescription = 'Enter resource description';
        this.auth_algorithm = ['sha1'];
        this.encryption_algorithm = ['aes-128', 'aes-256', 'aes-192'];
        this.pfs = ['group2', 'group5', 'group14'];
        this.phase1_negotiation_mode = ['main'];
        this.ike_version = ['v1'];
        this.transform_protocol = ['esp'];
        this.encapsulation_mode = ['tunnel'];
        this.initiator = ['bi-directional', 'response-only'];
        this.dpdProtocol = ['hold', 'restart'];
        this.adminState = [true, false];
        this.ipsecvpnService.ipsecPolicies.subscribe(function (policies) { return _this.ipsecPolicies = policies; });
        this.ipsecvpnService.ipsecPolicy.subscribe(function (policy) { return _this.ipsecPolicy = policy; });
        this.ipsecvpnService.ikePolicies.subscribe(function (policies) { return _this.ikePolicies = policies; });
        this.ipsecvpnService.ikePolicy.subscribe(function (policy) { return _this.ikePolicy = policy; });
        this.ipsecvpnService.vpnServices.subscribe(function (services) { return _this.vpnServices = services; });
        this.ipsecvpnService.vpnService.subscribe(function (service) { return _this.vpnService = service; });
        this.ipsecvpnService.ipsecConnections.subscribe(function (connections) { return _this.ipsecConnections = connections; });
        this.ipsecvpnService.ipsecConnection.subscribe(function (connection) { return _this.ipsecConnection = connection; });
        this.identityService.userPToken.subscribe(function (currentProjectToken) { return _this.currentProjectT = currentProjectToken; });
        this.identityService.availabilityZones.subscribe(function (azList) { return _this.azones = azList; });
        this.networkService.userRouters.subscribe(function (projectRouters) { return _this.routers = projectRouters; });
        this.networkService.userSubNetworks.subscribe(function (projectSubnets) { return _this.subnets = projectSubnets; });
    }
    IpsecvpnComponent.prototype.ngOnInit = function () {
        this.amendVpnServiceForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            'name': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](null),
            'adminState': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](null),
            'description': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](null)
        });
        this.addVpnServiceForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            'name': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](this.defaultName, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]),
            'description': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](this.defaultDescription, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]),
            'subnet_id': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('Select Subnet', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]),
            'router_id': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('Select Router', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]),
            'availability_zone': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](this.azones[0], [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required])
        });
        this.amendIpsecPolicyForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            'name': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](null),
            'encryption_algorithm': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](null),
            'pfs': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](null),
            'ipsecLtValue': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](null),
            'description': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](null)
        });
        this.addIpsecPolicyForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            'name': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](this.defaultName, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]),
            'description': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](this.defaultDescription, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]),
            'transform_protocol': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](this.transform_protocol[0], [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]),
            'auth_algorithm': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](this.auth_algorithm[0], [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]),
            'encapsulation_mode': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](this.encapsulation_mode[0], [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]),
            'encryption_algorithm': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](this.encryption_algorithm[1], [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]),
            'pfs': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](this.pfs[2], [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]),
            'ipsecLtValue': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](7200, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]),
            'availability_zone': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](this.azones[0], [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required])
        });
        this.amendIkePolicyForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            'encryption_algorithm': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](null),
            'pfs': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](null),
            'ikeLtValue': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](null),
            'name': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](null),
            'description': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](null)
        });
        this.addIkePolicyForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            'phase1_negotiation_mode': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](this.phase1_negotiation_mode[0], [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]),
            'auth_algorithm': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](this.auth_algorithm[0], [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]),
            'encryption_algorithm': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](this.encryption_algorithm[1], [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]),
            'pfs': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](this.pfs[2], [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]),
            'ikeLtValue': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](7200, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]),
            'ike_version': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](this.ike_version[0], [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]),
            'name': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](this.defaultName, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]),
            'description': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](this.defaultName, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]),
            'availability_zone': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](this.azones[0], [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required])
        });
        this.amendConnectionForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            'psk': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](null),
            'peer_cidrs': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](null),
            'peer_address': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](null),
            'peer_id': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](null),
            'name': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](null),
            'description': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](null),
            'initiator': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](null),
            'dpd_protocol': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](null),
            'dpd_interval': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](null),
            'dpd_timeout': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](null),
            'admin_state_up': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](null)
        });
        this.addConnectionForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            'psk': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]),
            'ipsecpolicy_id': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('Select IPSec Policy', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]),
            'peer_cidrs': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]),
            'initiator': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](this.initiator[0], [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]),
            'ikepolicy_id': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('Select IKE Policy', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]),
            'vpnservice_id': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('Select VPN Service', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]),
            'peer_address': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('Enter remote ip address', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]),
            'peer_id': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('Enter any remote identifier', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]),
            'dpd_protocol': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](this.dpdProtocol[0], [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]),
            'dpd_interval': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](30, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]),
            'dpd_timeout': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](120, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]),
            'admin_state_up': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](true, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]),
            'name': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](this.defaultName, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]),
            'description': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](this.defaultDescription, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]),
            'availability_zone': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](this.azones[0], [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required])
        });
    };
    IpsecvpnComponent.prototype.vpnChange = function (service) {
        console.log(service);
        this.ipsecvpnService.vpnServiceShow(this.currentProjectT, service.id);
        this.amendVpnServiceForm.patchValue({ name: service.name, description: service.description, adminState: service.admin_state_up });
        this.ipsecvpnService.changeVpnService(service);
    };
    IpsecvpnComponent.prototype.ipsecPolicyChange = function (policy) {
        console.log(policy);
        this.ipsecvpnService.ipsecPolicyShow(this.currentProjectT, policy.id);
        this.amendIpsecPolicyForm.patchValue({ name: policy.name,
            description: policy.description,
            encryption_algorithm: policy.encryption_algorithm,
            pfs: policy.pfs,
            ipsecLtValue: policy.lifetime.value
        });
        this.ipsecvpnService.changeIpsecPolicy(policy);
    };
    IpsecvpnComponent.prototype.ikePolicyChange = function (policy) {
        console.log(policy);
        this.ipsecvpnService.ikePolicyShow(this.currentProjectT, policy.id);
        this.amendIkePolicyForm.patchValue({ name: policy.name,
            description: policy.description,
            encryption_algorithm: policy.encryption_algorithm,
            pfs: policy.pfs,
            ikeLtValue: policy.lifetime.value
        });
        this.ipsecvpnService.changeIkePolicy(policy);
    };
    IpsecvpnComponent.prototype.connectionChange = function (connection) {
        console.log(connection);
        this.ipsecvpnService.ipsecSiteConnectionShow(this.currentProjectT, connection.id);
        this.amendConnectionForm.patchValue({
            name: connection.name,
            description: connection.description,
            psk: connection.psk,
            initiator: connection.initiator,
            peer_cidrs: connection.peer_cidrs,
            peer_address: connection.peer_address,
            peer_id: connection.peer_id,
            dpd_protocol: connection.dpd.action,
            dpd_interval: connection.dpd.interval,
            dpd_timeout: connection.dpd.timeout,
            admin_state_up: connection.admin_state_up
        });
        this.ipsecvpnService.changeIpsecConnection(connection);
    };
    IpsecvpnComponent.prototype.addVpnService = function () {
        this.ipsecvpnService.vpnServiceCreate(this.currentProjectT, this.addVpnServiceForm.get('name').value, this.addVpnServiceForm.get('description').value, this.addVpnServiceForm.get('router_id').value, this.addVpnServiceForm.get('subnet_id').value, this.addVpnServiceForm.get('availability_zone').value);
        this.addVpnServiceForm.reset();
    };
    IpsecvpnComponent.prototype.updateVpnService = function () {
        console.log(this.vpnService);
        this.ipsecvpnService.vpnServiceUpdate(this.currentProjectT, this.vpnService.vpnservice.id, this.amendVpnServiceForm.get('name').value, this.amendVpnServiceForm.get('adminState').value, this.amendVpnServiceForm.get('description').value);
        this.amendVpnServiceForm.reset();
    };
    IpsecvpnComponent.prototype.deleteVpnService = function () {
        this.ipsecvpnService.vpnServiceDelete(this.currentProjectT, this.vpnService.vpnservice.id);
        this.amendVpnServiceForm.reset();
    };
    IpsecvpnComponent.prototype.deleteIpsecPolicy = function () {
        this.ipsecvpnService.ipsecPolicyDelete(this.currentProjectT, this.ipsecPolicy.id);
        this.amendIpsecPolicyForm.reset();
    };
    IpsecvpnComponent.prototype.updateIpsecPolicy = function () {
        console.log(this.ipsecPolicy);
        this.ipsecvpnService.ipsecPolicyUpdate(this.currentProjectT, this.ipsecPolicy.id, this.amendIpsecPolicyForm.get('name').value, this.amendIpsecPolicyForm.get('encryption_algorithm').value, this.amendIpsecPolicyForm.get('pfs').value, this.amendIpsecPolicyForm.get('ipsecLtValue').value, this.amendIpsecPolicyForm.get('description').value);
        this.amendIpsecPolicyForm.reset();
    };
    IpsecvpnComponent.prototype.addIpsecPolicy = function () {
        console.log(this.addIpsecPolicyForm);
        this.ipsecvpnService.ipsecPolicyCreate(this.currentProjectT, this.addIpsecPolicyForm.get('name').value, this.addIpsecPolicyForm.get('description').value, this.addIpsecPolicyForm.get('transform_protocol').value, this.addIpsecPolicyForm.get('auth_algorithm').value, this.addIpsecPolicyForm.get('encryption_algorithm').value, this.addIpsecPolicyForm.get('encapsulation_mode').value, this.addIpsecPolicyForm.get('pfs').value, this.addIpsecPolicyForm.get('ipsecLtValue').value, this.addIpsecPolicyForm.get('availability_zone').value);
        this.addIpsecPolicyForm.reset();
    };
    IpsecvpnComponent.prototype.deleteIkePolicy = function () {
        this.ipsecvpnService.ikePolicyDelete(this.currentProjectT, this.ikePolicy.ikepolicy.id);
        this.amendIkePolicyForm.reset();
    };
    IpsecvpnComponent.prototype.updateIkePolicy = function () {
        console.log(this.ikePolicy);
        this.ipsecvpnService.ikePolicyUpdate(this.currentProjectT, this.ikePolicy.ikepolicy.id, this.amendIkePolicyForm.get('name').value, this.amendIkePolicyForm.get('encryption_algorithm').value, this.amendIkePolicyForm.get('ikeLtValue').value, this.amendIkePolicyForm.get('pfs').value, this.amendIkePolicyForm.get('description').value);
        this.amendIkePolicyForm.reset();
    };
    IpsecvpnComponent.prototype.addIkePolicy = function () {
        console.log(this.addIkePolicyForm);
        this.ipsecvpnService.ikePolicyCreate(this.currentProjectT, this.addIkePolicyForm.get('name').value, this.addIkePolicyForm.get('description').value, this.addIkePolicyForm.get('auth_algorithm').value, this.addIkePolicyForm.get('encryption_algorithm').value, this.addIkePolicyForm.get('ikeLtValue').value, this.addIkePolicyForm.get('ike_version').value, this.addIkePolicyForm.get('pfs').value, this.addIkePolicyForm.get('phase1_negotiation_mode').value, this.addIkePolicyForm.get('availability_zone').value);
        this.addIkePolicyForm.reset();
    };
    IpsecvpnComponent.prototype.deleteSiteConnection = function () {
        this.ipsecvpnService.ipsecSiteConnectionDelete(this.currentProjectT, this.ipsecConnection.id);
        this.amendConnectionForm.reset();
    };
    IpsecvpnComponent.prototype.updateSiteConnection = function () {
        console.log(this.ipsecConnection);
        console.log(this.amendConnectionForm);
        this.ipsecvpnService.ipsecSiteConnectionUpdate(this.currentProjectT, this.ipsecConnection.id, this.amendConnectionForm.get('initiator').value, this.amendConnectionForm.get('peer_id').value, this.amendConnectionForm.get('peer_address').value, this.amendConnectionForm.get('peer_cidrs').value, this.amendConnectionForm.get('psk').value, this.amendConnectionForm.get('name').value, this.amendConnectionForm.get('description').value, this.amendConnectionForm.get('admin_state_up').value, this.amendConnectionForm.get('dpd_protocol').value, this.amendConnectionForm.get('dpd_interval').value, this.amendConnectionForm.get('dpd_timeout').value);
        this.amendConnectionForm.reset();
    };
    IpsecvpnComponent.prototype.addSiteConnection = function () {
        console.log(this.addConnectionForm);
        this.ipsecvpnService.ipsecSiteConnectionCreate(this.currentProjectT, this.addConnectionForm.get('name').value, this.addConnectionForm.get('description').value, this.addConnectionForm.get('initiator').value, this.addConnectionForm.get('vpnservice_id').value, this.addConnectionForm.get('ikepolicy_id').value, this.addConnectionForm.get('ipsecpolicy_id').value, this.addConnectionForm.get('peer_id').value, this.addConnectionForm.get('peer_address').value, this.addConnectionForm.get('peer_cidrs').value, this.addConnectionForm.get('psk').value, this.addConnectionForm.get('admin_state_up').value, this.addConnectionForm.get('dpd_protocol').value, this.addConnectionForm.get('dpd_interval').value, this.addConnectionForm.get('dpd_timeout').value, this.addConnectionForm.get('availability_zone').value);
        this.addConnectionForm.reset();
    };
    return IpsecvpnComponent;
}());
IpsecvpnComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_5" /* Component */])({
        selector: 'app-ipsecvpn',
        template: __webpack_require__("../../../../../src/app/ipsecvpn.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ipsecvpn.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_ipsecvpn_service__["a" /* IpsecvpnService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_ipsecvpn_service__["a" /* IpsecvpnService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_identity_service__["a" /* IdentityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_identity_service__["a" /* IdentityService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__services_network_service__["a" /* NetworkService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_network_service__["a" /* NetworkService */]) === "function" && _c || Object])
], IpsecvpnComponent);

var _a, _b, _c;
//# sourceMappingURL=ipsecvpn.component.js.map

/***/ }),

/***/ "../../../../../src/app/loadbalancer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/loadbalancer.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf='currentProjectT' class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div *ngIf='userLBaaS' class=\"col-md-6\">\r\n      <div class=\"panel panel-default\">\r\n        <div class=\"panel-heading\">\r\n          <h3 class=\"panel-title\">\r\n            Load Balancers \r\n          </h3>\r\n        </div>\r\n        <div class=\"fixed-panel panel-body\">\r\n          <div *ngFor='let lbaas of userLBaaS'>\r\n            <li    value=\"lbaas | json | removeQuotes\"\r\n                    (click)=\"LBaaSChange(lbaas)\">{{lbaas.LoadBalancerName | json | removeQuotes}}</li>\r\n          </div>\r\n        </div>\r\n        <div class=\"panel-footer\">\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div *ngIf='userLBaaSDetails' class=\"col-md-6\">\r\n      <div class=\"panel panel-default\">\r\n        <div class=\"panel-heading\">\r\n          <h3 class=\"panel-title\">\r\n            Load Balancer {{userLBaaSDetails[0].LoadBalancerName | json | removeQuotes}}\r\n          </h3>\r\n        </div>\r\n        <div class=\"fixed-panel panel-body\">\r\n          <div>\r\n            {{userLBaaSDetails[0]| json| removeQuotes}}\r\n          </div>\r\n        </div>\r\n        <div class=\"panel-footer\">\r\n            <button type=\"button\" class=\"btn-xl btn btn-danger\" (click)=\"onLBaaSDelete(userLBaaSDetails[0])\">Delete Load Balancer</button>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/loadbalancer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_identity_service__ = __webpack_require__("../../../../../src/app/services/identity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_loadbalancer_service__ = __webpack_require__("../../../../../src/app/services/loadbalancer.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadbalancerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoadbalancerComponent = (function () {
    function LoadbalancerComponent(loadBalancerService, identityService) {
        this.loadBalancerService = loadBalancerService;
        this.identityService = identityService;
        this.currentProjectT = null;
    }
    LoadbalancerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadBalancerService.userLBaaS.subscribe(function (lbaas) { return _this.userLBaaS = lbaas; });
        this.loadBalancerService.LBaaSDetails.subscribe(function (lbaasdetail) { return _this.userLBaaSDetails = lbaasdetail; });
        this.identityService.userPToken.subscribe(function (currentProjectToken) { return _this.currentProjectT = currentProjectToken; });
    };
    LoadbalancerComponent.prototype.LBaaSChange = function (LBaaS) {
        this.loadBalancerService.getLBaaSDetailOrList(this.currentProjectT, LBaaS.LoadBalancerName);
        //console.log('Change LBaaS Detail => ');
        //console.log(this.userLBaaSDetails);
    };
    LoadbalancerComponent.prototype.onLBaaSDelete = function (LBaaS) {
        //console.log('Deleting LBaaS => ');
        //console.log(LBaaS);
        this.loadBalancerService.deleteLBaaS(this.currentProjectT, LBaaS.LoadBalancerName);
        this.loadBalancerService.changeLBaaSDetails(null);
        this.loadBalancerService.getLBaaSDetailOrList(this.currentProjectT, 'all');
    };
    return LoadbalancerComponent;
}());
LoadbalancerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_5" /* Component */])({
        selector: 'app-loadbalancer',
        template: __webpack_require__("../../../../../src/app/loadbalancer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/loadbalancer.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_loadbalancer_service__["a" /* LoadbalancerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_loadbalancer_service__["a" /* LoadbalancerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__services_identity_service__["a" /* IdentityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_identity_service__["a" /* IdentityService */]) === "function" && _b || Object])
], LoadbalancerComponent);

var _a, _b;
//# sourceMappingURL=loadbalancer.component.js.map

/***/ }),

/***/ "../../../../../src/app/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-xl {\r\n    padding: 10px 20px;\r\n    font-size: 20px;\r\n    border-radius: 10px;\r\n  }\r\n\r\n  .center {\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    margin: auto;  \r\n  }\r\n\r\n  /* The switch - the box around the slider */\r\n.switch {\r\n  position: relative;\r\n  display: inline-block;\r\n  width: 60px;\r\n  height: 34px;\r\n}\r\n\r\n/* Hide default HTML checkbox */\r\n.switch input {display:none;}\r\n\r\n/* The slider */\r\n.slider {\r\n  position: absolute;\r\n  cursor: pointer;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: #ccc;\r\n  transition: .4s;\r\n}\r\n\r\n.slider:before {\r\n  position: absolute;\r\n  content: \"\";\r\n  height: 26px;\r\n  width: 26px;\r\n  left: 4px;\r\n  bottom: 4px;\r\n  background-color: white;\r\n  transition: .4s;\r\n}\r\n\r\ninput:checked + .slider {\r\n  background-color: #2196F3;\r\n}\r\n\r\ninput:focus + .slider {\r\n  box-shadow: 0 0 1px #2196F3;\r\n}\r\n\r\ninput:checked + .slider:before {\r\n  -webkit-transform: translateX(26px);\r\n  transform: translateX(26px);\r\n}\r\n\r\n/* Rounded sliders */\r\n.slider.round {\r\n  border-radius: 34px;\r\n}\r\n\r\n.slider.round:before {\r\n  border-radius: 50%;\r\n}\r\n\r\n.help-block {\r\n  color: red;\r\n  background-color: white;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"center col-md-4\">\r\n    <form [formGroup]=\"loginForm\" >\r\n      <div formGroupName=\"loginData\">\r\n          <div class=\"form-group\">\r\n            <label for=\"k5contract\">\r\n              Contract\r\n            </label>\r\n            <input \r\n              type=\"text\" \r\n              class=\"form-control\" \r\n              id=\"k5contract\"\r\n              formControlName=\"contract\">\r\n            <span\r\n              *ngIf=\"!loginForm.get('loginData.contract').valid && loginForm.get('loginData.contract').touched\"\r\n              class=\"help-block\">Please enter a valid K5 contract name\r\n            </span>\r\n          </div>\r\n        <div class=\"form-group\">\t\t\t\t\t \r\n          <label for=\"k5username\">\r\n            User\r\n          </label>\r\n          <input \r\n            type=\"text\" \r\n            class=\"form-control\" \r\n            id=\"k5username\"\r\n            formControlName=\"user\">\r\n          <span\r\n            *ngIf=\"!loginForm.get('loginData.user').valid && loginForm.get('loginData.user').touched\"\r\n            class=\"help-block\">Please enter a valid K5 username\r\n          </span>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"k5password\">\r\n            Password\r\n          </label>\r\n          <input \r\n            type=\"password\" \r\n            class=\"form-control\" \r\n            id=\"k5password\"\r\n            formControlName=\"password\">\r\n          <span\r\n            *ngIf=\"!loginForm.get('loginData.password').valid && loginForm.get('loginData.password').touched\"\r\n            class=\"help-block\">Please enter a valid K5 password\r\n          </span>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"k5region\">\r\n            Region\r\n          </label>\r\n          <select\r\n            id=\"region\"\r\n            class=\"form-control\"\r\n            formControlName=\"region\"\t\t\t\t\t\t\r\n            name=\"region\">\r\n            <option [value]=\"null\">Choose a region</option>\r\n            <option *ngFor=\"let region of regions\" [value]=\"region\">{{region}}</option>\r\n            \r\n          </select>\r\n          <span\r\n            *ngIf=\"!loginForm.get('loginData.region').valid && loginForm.get('loginData.region').touched\"\r\n            class=\"help-block\">Please select a global region from the list\r\n          </span>\t\r\n        </div>\r\n        <!-- <div class=\"form-group\">  -->\r\n            <!-- CORS Proxy Toggle -->\r\n            <!-- <span\r\n              *ngIf=\"!loginForm.get('loginData.k5cors').value\"\r\n              class=\"help-block\">CORS Proxy Disabled\r\n            </span> -->\r\n\r\n            <!-- <p *ngIf=\"loginForm.get('loginData.k5cors').value\">CORS Proxy Enabled</p>\r\n            <p *ngIf=\"!loginForm.get('loginData.k5cors').value\">CORS Proxy Disabled</p> -->\r\n            <!-- <label class=\"switch\">\r\n              <input type=\"checkbox\"\r\n              id=\"k5cors\"\r\n              formControlName=\"k5cors\"\r\n              (change)=\"toggleK5Proxy()\">\r\n              <span class=\"slider round\"></span>\r\n              \r\n            </label>\r\n            \r\n          </div> -->\r\n\r\n      </div>\r\n      <div class=\"form-group\" *ngIf=\"!loggedIn\">\r\n        <button type=\"button\" class=\"pull-right btn-xl btn btn-success btn-large\" [disabled]=\"!loginForm.get('loginData').valid\" (click)=\"onLogin()\">\r\n          Login\r\n        </button>\r\n        <span\r\n          *ngIf=\"failedLogIn\"\r\n          class=\"help-block error\">Login Failure - Please check your K5 details and try again.\r\n        </span>\t\t\t\t\t\r\n      </div>\r\n    </form> \r\n\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_utility_service__ = __webpack_require__("../../../../../src/app/services/utility.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_identity_service__ = __webpack_require__("../../../../../src/app/services/identity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(identityService, utilityService) {
        this.identityService = identityService;
        this.utilityService = utilityService;
        this.regions = ['uk-1', 'fi-1', 'de-1', 'es-1', 'us-1'];
        this.loggedIn = false;
        this.failedLogIn = false;
        this.k5proxy = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.identityService.loggedIn.subscribe(function (status) { return _this.loggedIn = status; });
        this.utilityService.userK5CORS.subscribe(function (proxy) { return _this.k5proxy = proxy; });
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]({
            'loginData': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]({
                'user': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required]),
                'password': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required]),
                'contract': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required]),
                'region': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required]),
                'k5cors': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */](true)
            })
        });
    };
    LoginComponent.prototype.toggleK5Proxy = function () {
        //console.log(this.k5proxy);
        this.utilityService.changek5proxy(this.k5proxy);
        //console.log(this.k5proxy);
    };
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        this.identityService.login(this.loginForm.get('loginData.user').value, this.loginForm.get('loginData.password').value, this.loginForm.get('loginData.contract').value, this.loginForm.get('loginData.region').value)
            .subscribe(function (data) {
            //this.identityService.loggedIn = true;
            //this.failedLogIn = false;
            //console.log("Login.ts -> Logged In");
            // this.identityService.getProjectList().subscribe(newProjectList => {
            //   this.projects = newProjectList;
            // });
            // this.identityService.getK5UnScopedDetails();
        }, function (error) {
            //this.alertService.error(error);
            //this.loading = false;
            //console.log('bang - something failed during login');
            //this.failedLogIn = true;
            _this.loginForm.reset();
        });
        //console.log(this.loginForm);
        //this.passwordForm.reset();
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_5" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_identity_service__["a" /* IdentityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_identity_service__["a" /* IdentityService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__services_utility_service__["a" /* UtilityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_utility_service__["a" /* UtilityService */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/logout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-xl {\r\n    padding: 10px 20px;\r\n    font-size: 20px;\r\n    border-radius: 10px;\r\n  }\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/logout.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n    <button type=\"button\" class=\"btn-xl btn btn-danger\" (click)=\"onLogout()\">Logout</button>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_identity_service__ = __webpack_require__("../../../../../src/app/services/identity.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogoutComponent = (function () {
    function LogoutComponent(identityService) {
        this.identityService = identityService;
    }
    LogoutComponent.prototype.ngOnInit = function () {
    };
    LogoutComponent.prototype.onLogout = function () {
        this.identityService.logout();
        // this.loginForm.reset();
        // this.loggedIn = false;
    };
    return LogoutComponent;
}());
LogoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-logout',
        template: __webpack_require__("../../../../../src/app/logout.component.html"),
        styles: [__webpack_require__("../../../../../src/app/logout.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_identity_service__["a" /* IdentityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_identity_service__["a" /* IdentityService */]) === "function" && _a || Object])
], LogoutComponent);

var _a;
//# sourceMappingURL=logout.component.js.map

/***/ }),

/***/ "../../../../../src/app/model/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* unused harmony export catalog */
/* unused harmony export endpoints */
/* unused harmony export roles */
/* unused harmony export projects */
/* unused harmony export project */
/* unused harmony export ProjectToken */
var User = (function () {
    function User() {
    }
    return User;
}());

var catalog = (function () {
    function catalog() {
    }
    return catalog;
}());

var endpoints = (function () {
    function endpoints() {
    }
    return endpoints;
}());

var roles = (function () {
    function roles() {
    }
    return roles;
}());

var projects = (function () {
    function projects() {
        this.length = projects.length;
    }
    return projects;
}());

var project = (function () {
    function project() {
    }
    return project;
}());

var ProjectToken = (function () {
    function ProjectToken() {
    }
    return ProjectToken;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/app/network.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/network.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  network works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/network.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NetworkComponent = (function () {
    function NetworkComponent() {
    }
    NetworkComponent.prototype.ngOnInit = function () {
    };
    return NetworkComponent;
}());
NetworkComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-network',
        template: __webpack_require__("../../../../../src/app/network.component.html"),
        styles: [__webpack_require__("../../../../../src/app/network.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NetworkComponent);

//# sourceMappingURL=network.component.js.map

/***/ }),

/***/ "../../../../../src/app/project-panel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fixed-panel {\r\n    min-height: 200px;\r\n    max-height: 200px;\r\n    overflow-y: scroll;\r\n    overflow-x: scroll;\r\n  }\r\n\r\nli:hover { \r\n    background-color: yellow;\r\n  }\r\n\r\n  .term-container {\r\n    background: #171717;\r\n    border-radius: 5px;\r\n    color: white;\r\n    word-break: break-word;\r\n    overflow-wrap: break-word;\r\n    font-family: Monaco, Consolas, monospace;\r\n    font-size: 12px;\r\n    line-height: 20px;\r\n    padding: 14px 18px;\r\n    white-space: pre-wrap;\r\n  }\r\n\r\n  /*** PANEL PRIMARY ***/\r\n.with-nav-tabs.panel-primary .nav-tabs > li > a,\r\n.with-nav-tabs.panel-primary .nav-tabs > li > a:hover,\r\n.with-nav-tabs.panel-primary .nav-tabs > li > a:focus {\r\n    color: #fff;\r\n}\r\n.with-nav-tabs.panel-primary .nav-tabs > .open > a,\r\n.with-nav-tabs.panel-primary .nav-tabs > .open > a:hover,\r\n.with-nav-tabs.panel-primary .nav-tabs > .open > a:focus,\r\n.with-nav-tabs.panel-primary .nav-tabs > li > a:hover,\r\n.with-nav-tabs.panel-primary .nav-tabs > li > a:focus {\r\n\tcolor: #fff;\r\n\tbackground-color: #3071a9;\r\n\tborder-color: transparent;\r\n}\r\n.with-nav-tabs.panel-primary .nav-tabs > li.active > a,\r\n.with-nav-tabs.panel-primary .nav-tabs > li.active > a:hover,\r\n.with-nav-tabs.panel-primary .nav-tabs > li.active > a:focus {\r\n\tcolor: #428bca;\r\n\tbackground-color: #fff;\r\n\tborder-color: #428bca;\r\n\tborder-bottom-color: transparent;\r\n}\r\n.with-nav-tabs.panel-primary .nav-tabs > li.dropdown .dropdown-menu {\r\n    background-color: #428bca;\r\n    border-color: #3071a9;\r\n}\r\n.with-nav-tabs.panel-primary .nav-tabs > li.dropdown .dropdown-menu > li > a {\r\n    color: #fff;   \r\n}\r\n.with-nav-tabs.panel-primary .nav-tabs > li.dropdown .dropdown-menu > li > a:hover,\r\n.with-nav-tabs.panel-primary .nav-tabs > li.dropdown .dropdown-menu > li > a:focus {\r\n    background-color: #3071a9;\r\n}\r\n.with-nav-tabs.panel-primary .nav-tabs > li.dropdown .dropdown-menu > .active > a,\r\n.with-nav-tabs.panel-primary .nav-tabs > li.dropdown .dropdown-menu > .active > a:hover,\r\n.with-nav-tabs.panel-primary .nav-tabs > li.dropdown .dropdown-menu > .active > a:focus {\r\n    background-color: #4a9fe9;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/project-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf='currentProjectT && contractUsers && userServers && userLBaaS' class=\"container-fluid\">\r\n  \r\n  <div class=\"col-md-12\">\r\n      <div class=\"panel with-nav-tabs panel-info\">  <!-- Main Tabbed Panel Wrapper --> \r\n          <div class=\"panel-heading\"> <!-- Main Tabbed Panel Headings -->\r\n                  <ul class=\"nav nav-tabs\">\r\n                      <li *ngIf='contractProjects'><a href=\"#tab0global\" data-toggle=\"tab\">Contract Detail</a></li>\r\n                      <li *ngIf='contractProjects'><a href=\"#tab0project\" data-toggle=\"tab\">Project Detail</a></li>\r\n                      <li *ngIf='userServers'><a href=\"#tab1compute\" data-toggle=\"tab\">Compute <span class=\"badge\">{{userServers.length}}</span></a></li>\r\n                      <li *ngIf='userStacks'> <a href=\"#tab2stack\" data-toggle=\"tab\">Stack <span class=\"badge\">{{userStacks.length}}</span></a></li>\r\n                      <li *ngIf='userLBaaS'> <a href=\"#tabLBaaS\" data-toggle=\"tab\">LBaaS <span class=\"badge\">{{userLBaaS.length}}</span></a></li>\r\n                      <li *ngIf='userRouters'> <a href=\"#tabRouter\" data-toggle=\"tab\">Router <span class=\"badge\">{{userRouters.length}}</span></a></li>\r\n                      <li *ngIf='vpnServices && ipsecConnections && ipsecPolicies && ikePolicies'><a href=\"#tabIPSecVPN\" data-toggle=\"tab\">IPSecVPN <span class=\"badge\">{{vpnServices.vpnservices.length}}</span></a></li>\r\n                      <li *ngIf='currentProjectT && userPorts && userNetworks && userSubNetworks && userRouters && false'><a href=\"#tabVisualisation\" data-toggle=\"tab\">Beta Visualisation</a></li>\r\n                  </ul>\r\n          </div> <!-- Main Tabbed Panel Headings -->\r\n          <div class=\"panel-body\"> <!-- Tabbed Panel Body -->\r\n              <div class=\"tab-content\"> <!-- Tabbed Panel Body Panes -->\r\n                  <div class=\"tab-pane fade in active\" id=\"tab0global\"> <!-- First Tab -->\r\n                      <div class=\"container-fluid\"> <!-- First Tab Container-->\r\n                              <div class=\"row\"> <!-- First Tab Container First Row-->\r\n\r\n                                  <div class=\"col-md-6\"><!-- First Tab Container First Row Block 1-->\r\n                                            <div  *ngIf='contractProjects' class=\"panel panel-default\"><!-- Panel Start -->\r\n                                                  <div class=\"panel-heading\"><!-- Panel Heading -->\r\n                                                    <h3 class=\"panel-title\">\r\n                                                      Projects <span class=\"badge\">{{contractProjects.length}}</span>\r\n                                                    </h3>\r\n                                                  </div><!-- Panel Heading -->\r\n                                                  <div class=\"fixed-panel panel-body\"><!-- Panel Body -->\r\n                                                      <div *ngFor='let project of contractProjects'>\r\n                                                          <li    value=\"project.name | json | removeQuotes\"\r\n                                                                  (click)=\"stackChange(stack)\">{{project.name | json | removeQuotes}}</li>\r\n                                                      </div>\r\n                                                  </div><!-- Panel Body -->\r\n                                                  <div class=\"panel-footer\"><!-- Panel Footer -->                                  \r\n                                                  </div><!-- Panel Footer -->\r\n                                            </div><!-- Panel Start -->\r\n                                  </div><!-- First Tab Container First Row Block 1-->\r\n\r\n                                  <div class=\"col-md-6\"><!-- First Tab Container First Row Block 2-->\r\n                                            <div  *ngIf='contractUsers' class=\"panel panel-default\"><!-- Panel Start -->\r\n                                                  <div class=\"panel-heading\"><!-- Panel Heading -->\r\n                                                        <h3 class=\"panel-title\">\r\n                                                            Users <span class=\"badge\">{{contractUsers.length}}</span>\r\n                                                        </h3>\r\n                                                  </div><!-- Panel Heading -->\r\n                                                  <div class=\"fixed-panel panel-body\"><!-- Panel Body -->\r\n                                                    <div *ngFor='let cuser of contractUsers'>\r\n                                                      <li    \r\n                                                              (click)=\"userSelection(cuser)\">{{cuser.name | json | removeQuotes}}</li>\r\n                                                    </div>\r\n                                                  </div><!-- Panel Body -->\r\n                                            </div><!-- Panel Start -->\r\n                                  </div><!-- First Tab Container First Row Block 2-->\r\n\r\n                              </div> <!-- First Tab Container First Row-->\r\n                              <div class=\"row\"> <!-- First Tab Container Second Row-->\r\n                                <div  class=\"col-md-6\"><!-- First Tab Container Second Row Block 1-->\r\n                                <div  *ngIf='contractGroups' class=\"panel panel-default\">\r\n                                  <div class=\"panel-heading\">\r\n                                    <h3 class=\"panel-title\">\r\n                                      Groups <span class=\"badge\">{{contractGroups.length}}</span>\r\n                                    </h3>\r\n                                  </div>\r\n                                  <div class=\"fixed-panel panel-body\">\r\n                                    <div *ngFor='let cgroup of contractGroups'>\r\n                                      <li    value=\"cgroup.id | json | removeQuotes\"\r\n                                              (click)=\"cgroupChange(cgroup)\">{{cgroup.name | json | removeQuotes}}</li>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                              </div><!-- First Tab Container Second Row Block 1-->\r\n                              <div class=\"col-md-6\"><!-- First Tab Container Second Row Block 2-->\r\n                                  <div *ngIf='contractRoles' class=\"panel panel-default\">\r\n                                      <div class=\"panel-heading\">\r\n                                        <h3 class=\"panel-title\">\r\n                                          Roles <span class=\"badge\">{{contractRoles.length}}</span>\r\n                                        </h3>\r\n                                      </div>\r\n                                      <div class=\"fixed-panel panel-body\">\r\n                                        <div *ngFor='let crole of contractRoles'>\r\n                                          <li    value=\"crole.id | json | removeQuotes\"\r\n                                                  (click)=\"croleChange(crole)\">{{crole.name | json | removeQuotes}}</li>\r\n                                        </div>\r\n                                      </div>\r\n                                    </div>\r\n                              </div>\r\n\r\n                            </div> <!-- First Tab Container Second Row-->\r\n                        \r\n                      </div><!-- First Tab Container-->\r\n                  </div> <!-- First Tab -->\r\n                  <div class=\"tab-pane fade\" id=\"tab0project\"> <!-- Second Tab -->\r\n                      <div class=\"container-fluid\">\r\n                          <div class=\"row\">\r\n                              <div class=\"col-md-6\">\r\n                                <div *ngIf='roleAssignment' class=\"panel panel-default\">\r\n                                  <div class=\"panel-heading\">\r\n                                    <h3 class=\"panel-title\">\r\n                                      Role Assignments <span class=\"badge\">{{roleAssignment.length}}</span>\r\n                                    </h3>\r\n                                  </div>\r\n                                    <div class=\"panel-heading\">\r\n                                      <h2 class=\"panel-title\">\r\n                                          User added directly to Project\r\n                                      </h2>\r\n                                    </div>\r\n                                  \r\n                                  <div class=\"fixed-panel panel-body\">\r\n                                      <div *ngFor='let role of roleAssignment'>\r\n                                          <li *ngIf='role.user'>{{role.user.id | json | removeQuotes | convertUserIDtoName }} ({{role.role.id | json | removeQuotes | convertRoleIDtoName }})</li>\r\n                              \r\n                                      </div>\r\n                                  </div>\r\n                                  <div class=\"panel-heading\">\r\n                                      <h2 class=\"panel-title\">\r\n                                          Groups attached to Project\r\n                                      </h2>\r\n                                    </div>\r\n                                  <div class=\"fixed-panel panel-body\">\r\n                                      <div *ngFor='let role of roleAssignment'>\r\n                                          <li *ngIf='role.group' value=\"role\"\r\n                                          (click)=\"groupSelection(role)\">{{role.group.id | json | removeQuotes| convertGroupIDtoName }} ({{role.role.id | json | removeQuotes | convertRoleIDtoName }})</li>\r\n                                      </div>\r\n                                  </div>\r\n                                  <div class=\"panel-footer\">\r\n                                      \r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"col-md-6\">\r\n                                  <div class=\"panel panel-default\">\r\n                                      <div class=\"panel-heading\">\r\n                                        <h3 class=\"panel-title\">\r\n                                          Users in selected Group\r\n                                        </h3>\r\n                                      </div>\r\n                                      <div class=\"fixed-panel panel-body\">\r\n                                          <div *ngFor='let user of groupUsers'>\r\n                                              <li *ngIf='user'>{{user.name | json | removeQuotes}}</li>\r\n                                  \r\n                                          </div>\r\n                                      </div>\r\n                                      \r\n                                      \r\n                                    </div>\r\n                              </div>\r\n\r\n                            </div>\r\n                        </div>\r\n                  </div><!-- Second Tab -->\r\n                  <div class=\"tab-pane fade\" id=\"tab1compute\"><!-- Third Tab -->\r\n                      <div *ngIf='currentProjectT' class=\"container-fluid\">\r\n                        <!-- <app-cloudvisualised></app-cloudvisualised> -->\r\n                          <div class=\"row\">\r\n                            <div *ngIf='userServers' class=\"col-md-4\">\r\n                              <div class=\"panel panel-default\">\r\n                                <div class=\"panel-heading\">\r\n                                  <h3 class=\"panel-title\">\r\n                                    Servers \r\n                                  </h3>\r\n                                </div>\r\n                                <div class=\"fixed-panel panel-body\">\r\n                                  <div *ngFor='let server of userServers | sortObjectsByName'>\r\n                                    <li    value=\"server.id | json | removeQuotes\"\r\n                                            (click)=\"serverChange(server)\">{{server.name | json | removeQuotes}}</li>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"panel-footer\">\r\n                        \r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-md-4\">\r\n                                <div *ngIf='serverDetails' class=\"panel panel-default\">\r\n                                    <div class=\"panel-heading\">\r\n                                      <h3 class=\"panel-title\">\r\n                                        Details of {{serverDetails.name|json | removeQuotes}}\r\n                                      </h3>\r\n                                    </div>\r\n                                    <div class=\"fixed-panel panel-body\">\r\n                                        {{serverDetails|json | removeQuotes}}\r\n                                    </div>\r\n                                    <div class=\"panel-footer\">\r\n                                        {{serverDetails.flavor.id|json | removeQuotes}}\r\n                                    </div>\r\n                                  </div>\r\n                            </div>\r\n                            <div class=\"col-md-4\">\r\n                                <div *ngIf='serverDetails' class=\"panel panel-default\">\r\n                                    <div class=\"panel-heading\">\r\n                                      <h3 class=\"panel-title\">\r\n                                          Console boot logs for {{serverDetails.name|json | removeQuotes}}\r\n                                      </h3>\r\n                                    </div>\r\n                                    <div class=\"term-container fixed-panel panel-body\">\r\n                                        {{serverLogs}}\r\n                                    </div>\r\n                                    <div class=\"panel-footer\">\r\n                                      Panel footer\r\n                                    </div>\r\n                                  </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                  </div><!-- Third Tab -->\r\n                  <div class=\"tab-pane fade\" id=\"tab2stack\"><!-- Fourth Tab -->\r\n                      <div *ngIf='currentProjectT' class=\"container-fluid\">\r\n                          <div class=\"row\">\r\n                            <div *ngIf='userStacks' class=\"col-md-4\">\r\n                              <div class=\"panel panel-default\">\r\n                                <div class=\"panel-heading\">\r\n                                  <h3 class=\"panel-title\">\r\n                                    Stacks \r\n                                  </h3>\r\n                                </div>\r\n                                <div class=\"fixed-panel panel-body\">\r\n                                  <div *ngFor='let stack of userStacks | stackSorter'>\r\n                                    <li    value=\"stack.id | json | removeQuotes\"\r\n                                            (click)=\"stackChange(stack)\">{{stack.stack_name | json| removeQuotes}}</li>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"panel-footer\">\r\n                        \r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-md-4\">\r\n                                <div *ngIf='stackDetails' class=\"panel panel-default\">\r\n                                    <div class=\"panel-heading\">\r\n                                      <h3 class=\"panel-title\">\r\n                                        Details of {{stackDetails.stack.stack_name|json| removeQuotes}}\r\n                                      </h3>\r\n                                    </div>\r\n                                    <div class=\"fixed-panel panel-body\">\r\n                                        {{stackDetails|json | removeQuotes}}\r\n                                    </div>\r\n                                    <div class=\"panel-footer\">\r\n                                        <button type=\"button\" class=\"btn-xl btn btn-danger\" (click)=\"deleteStack(stackDetails)\">Delete Stack</button>\r\n                                        \r\n                                    </div>\r\n                                  </div>\r\n                            </div>\r\n                            <div class=\"col-md-4\">\r\n                                <div *ngIf='stackDetails' class=\"panel panel-default\">\r\n                                    <div class=\"panel-heading\">\r\n                                      <h3 class=\"panel-title\">\r\n                                        Outputs of {{stackDetails.stack.stack_name|json| removeQuotes}}\r\n                                      </h3>\r\n                                    </div>\r\n                                    <div class=\"fixed-panel panel-body\">\r\n                                        {{stackOutputs|json | removeQuotes}}\r\n                                    </div>\r\n                                    <div class=\"panel-footer\">\r\n                                        \r\n                                    </div>\r\n                                  </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                  </div><!-- Fourth Tab -->\r\n                  <div class=\"tab-pane fade\" id=\"tabLBaaS\"><!-- Fifth Tab -->\r\n                    <app-loadbalancer></app-loadbalancer>\r\n                  </div><!-- Fifth Tab -->\r\n                  <div class=\"tab-pane fade\" id=\"tabRouter\"><!-- Fifth Tab -->\r\n                    <app-router></app-router>\r\n                  </div><!-- Fifth Tab -->\r\n                  <div class=\"tab-pane fade\" id=\"tabIPSecVPN\"><!-- Fifth Tab -->\r\n                    <app-ipsecvpn></app-ipsecvpn>\r\n                  </div>\r\n                  <div class=\"tab-pane fade\" id=\"tabVisualisation\"><!-- Fifth Tab -->\r\n                    <app-cloudvisualised *ngIf='currentProjectT && userPorts && userNetworks && userSubNetworks && userRouters && false' ></app-cloudvisualised>\r\n                  </div>\r\n              </div> <!-- Tabbed Panel Body Panes -->\r\n          </div> <!-- Tabbed Panel Body -->\r\n      </div> <!-- Main Tabbed Panel Wrapper -->\r\n  </div>\r\n  \r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/project-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_network_service__ = __webpack_require__("../../../../../src/app/services/network.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_loadbalancer_service__ = __webpack_require__("../../../../../src/app/services/loadbalancer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_stack_service__ = __webpack_require__("../../../../../src/app/services/stack.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_maintenance_service__ = __webpack_require__("../../../../../src/app/services/user-maintenance.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_compute_service__ = __webpack_require__("../../../../../src/app/services/compute.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_identity_service__ = __webpack_require__("../../../../../src/app/services/identity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_ipsecvpn_service__ = __webpack_require__("../../../../../src/app/services/ipsecvpn.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectPanelComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ProjectPanelComponent = (function () {
    function ProjectPanelComponent(computeService, userMaintenanceService, identityService, stackService, loadbalancerService, networkService, ipsecvpnService) {
        this.computeService = computeService;
        this.userMaintenanceService = userMaintenanceService;
        this.identityService = identityService;
        this.stackService = stackService;
        this.loadbalancerService = loadbalancerService;
        this.networkService = networkService;
        this.ipsecvpnService = ipsecvpnService;
        this.userServers = null;
        this.currentProjectT = null;
        this.serverDetails = null;
        this.serverLogs = null;
        this.currentServer = null;
        this.stackDetails = null;
        this.userStacks = null;
        this.stackOutputs = null;
        this.contractProjects = null;
        this.contractUsers = null;
        this.contractGroups = null;
        this.contractRoles = null;
        this.roleAssignment = null;
        this.groupUsers = null;
        this.userGlobalToken = null;
        this.userLBaaS = null;
        this.userRouters = null;
        this.userNetworks = null;
        this.userSubNetworks = null;
        this.userPorts = null;
        this.vpnServices = null;
        this.ipsecPolicies = null;
        this.ikePolicies = null;
        this.ipsecConnections = null;
    }
    ProjectPanelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.identityService.contractProjects.subscribe(function (projects) { return _this.contractProjects = projects; });
        this.identityService.usersInGroup.subscribe(function (gusers) { return _this.groupUsers = gusers; });
        this.identityService.roleAssignments.subscribe(function (roles) { return _this.roleAssignment = roles; });
        this.identityService.contractUsers.subscribe(function (users) { return _this.contractUsers = users; });
        this.identityService.contractGroups.subscribe(function (groups) { return _this.contractGroups = groups; });
        this.identityService.contractRoles.subscribe(function (roles) { return _this.contractRoles = roles; });
        this.identityService.userPToken.subscribe(function (currentProjectToken) { return _this.currentProjectT = currentProjectToken; });
        this.identityService.userGToken.subscribe(function (globalToken) { return _this.userGlobalToken = globalToken; });
        this.computeService.userServers.subscribe(function (servers) { return _this.userServers = servers; });
        this.computeService.serverDetails.subscribe(function (server) { return _this.serverDetails = server; });
        this.computeService.serverLogs.subscribe(function (logs) { return _this.serverLogs = logs; });
        this.stackService.stackDetails.subscribe(function (stackDetail) { return _this.stackDetails = stackDetail; });
        this.stackService.userStacks.subscribe(function (stacks) { return _this.userStacks = stacks; });
        this.stackService.stackOutputs.subscribe(function (outputs) { return _this.stackOutputs = outputs; });
        this.loadbalancerService.userLBaaS.subscribe(function (LBaaS) { return _this.userLBaaS = LBaaS; });
        this.networkService.userRouters.subscribe(function (routers) { return _this.userRouters = routers; });
        this.networkService.userNetworks.subscribe(function (networks) { return _this.userNetworks = networks; });
        this.networkService.userSubNetworks.subscribe(function (subnets) { return _this.userSubNetworks = subnets; });
        this.networkService.userPorts.subscribe(function (ports) { return _this.userPorts = ports; });
        this.ipsecvpnService.vpnServices.subscribe(function (services) { return _this.vpnServices = services; });
        this.ipsecvpnService.ipsecPolicies.subscribe(function (secpolicies) { return _this.ipsecPolicies = secpolicies; });
        this.ipsecvpnService.ikePolicies.subscribe(function (ikepolicies) { return _this.ikePolicies = ikepolicies; });
        this.ipsecvpnService.ipsecConnections.subscribe(function (connections) { return _this.ipsecConnections = connections; });
        //console.log('Routers');
        //console.log(this.userRouters);
    };
    ProjectPanelComponent.prototype.serverChange = function (server) {
        this.computeService.getServerDetails(this.currentProjectT, server);
        this.computeService.getServerLogs(this.currentProjectT, server);
        //console.log('Change Server => ');
        //console.log(this.serverDetails);
        //console.log(this.serverLogs);
    };
    ProjectPanelComponent.prototype.userSelection = function (user) {
        //console.log('Calling USER EMAIL API');
        //console.log(this.userGlobalToken);
        //console.log(user);
        this.identityService.getUserInfo(user);
    };
    ProjectPanelComponent.prototype.stackChange = function (stack) {
        this.stackService.getStackDetails(this.currentProjectT, stack);
        // outputs API call not currently implemented on K5
        // this.stackService.getStackOutputs(this.currentProjectT, stack);
        //console.log('Change Stack => ');
        //console.log(this.stackDetails);
    };
    ProjectPanelComponent.prototype.groupSelection = function (role) {
        //console.log('Group Users Entry');
        //console.log(role);
        this.identityService.getUsersInGroup(role);
    };
    ProjectPanelComponent.prototype.deleteStack = function (stack) {
        this.stackService.deleteStack(this.currentProjectT, stack);
        // this.stackChange(null);
        //this.stackService.getStackList(this.currentProjectT);
    };
    return ProjectPanelComponent;
}());
ProjectPanelComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["_5" /* Component */])({
        selector: 'app-project-panel',
        template: __webpack_require__("../../../../../src/app/project-panel.component.html"),
        styles: [__webpack_require__("../../../../../src/app/project-panel.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_compute_service__["a" /* ComputeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_compute_service__["a" /* ComputeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_maintenance_service__["a" /* UserMaintenanceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_maintenance_service__["a" /* UserMaintenanceService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_identity_service__["a" /* IdentityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_identity_service__["a" /* IdentityService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_stack_service__["a" /* StackService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_stack_service__["a" /* StackService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__services_loadbalancer_service__["a" /* LoadbalancerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_loadbalancer_service__["a" /* LoadbalancerService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__services_network_service__["a" /* NetworkService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_network_service__["a" /* NetworkService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__services_ipsecvpn_service__["a" /* IpsecvpnService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_ipsecvpn_service__["a" /* IpsecvpnService */]) === "function" && _g || Object])
], ProjectPanelComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=project-panel.component.js.map

/***/ }),

/***/ "../../../../../src/app/project.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper{\r\n    border: 1px;\r\n    height: 250px;\r\n    overflow-x: hidden;\r\n    overflow-y: scroll;\r\n    width: 250px;\r\n }\r\n .wrapper .selection{\r\n   float: none;\r\n   width:250px;\r\n   border:1px solid #ccc\r\n }\r\n\r\n li:hover { \r\n  background-color: yellow;\r\n}\r\n\r\n.btn-xl {\r\n  padding: 10px 20px;\r\n  font-size: 20px;\r\n  border-radius: 10px;\r\n}\r\n\r\n.btn-lg{\r\n  padding: 10px 20px;\r\n  font-size: 20px;\r\n  border-radius: 0px;\r\n}\r\n\r\n.btn-round-lg{\r\n  padding: 10px 20px;\r\n  font-size: 20px;\r\n  border-radius: 20px;\r\n}\r\n.btn-round{\r\nborder-radius: 17px;\r\n}\r\n.btn-round-sm{\r\nborder-radius: 15px;\r\n}\r\n.btn-round-xs{\r\nborder-radius: 11px;\r\npadding-left: 10px;\r\npadding-right: 10px;\r\n}\r\n/* .navbar .navbar-nav {\r\n  display: inline-block;\r\n  float: none;\r\n  vertical-align: top;\r\n}\r\n\r\n.navbar .navbar-collapse {\r\n  text-align: center;\r\n} */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/project.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n   <ul *ngIf='currentProject'>   \r\n      \r\n      <!-- Split button -->\r\n      <div  class=\"btn-group\">  \r\n        <button type=\"button\" class=\"btn btn-round-lg btn-danger\" (click)=\"onLogout()\">Logout</button>\r\n        <button type=\"button\" class=\"btn btn-round-lg btn-success\">{{currentProject.name | json | removeQuotes}}</button>\r\n      \r\n        <button type=\"button\" class=\"btn btn-round-lg btn-info dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <span class=\"sr-only\">Toggle Dropdown</span>Select Project <span class=\"caret\"></span>\r\n        </button>\r\n      \r\n\r\n        <ul class=\"wrapper selection dropdown-menu dropdown-hover scrollable-menu\" >\r\n          <div *ngFor='let project of projects | sortObjectsByName'>\r\n            <li  *ngIf='project.enabled'  value=\"project.id | json | removeQuotes\"\r\n                    (click)=\"projectChange(project)\">{{project.name | json | removeQuotes}}</li>\r\n          </div>\r\n        </ul>\r\n      </div>\r\n    </ul>\r\n   \r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_identity_service__ = __webpack_require__("../../../../../src/app/services/identity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_compute_service__ = __webpack_require__("../../../../../src/app/services/compute.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_stack_service__ = __webpack_require__("../../../../../src/app/services/stack.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_loadbalancer_service__ = __webpack_require__("../../../../../src/app/services/loadbalancer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_cloudvisualised_service__ = __webpack_require__("../../../../../src/app/services/cloudvisualised.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { FormControl, FormGroup, Validators } from '@angular/forms';





var ProjectComponent = (function () {
    function ProjectComponent(identityService, computeService, stackService, loadBalancerService, cloudVisualisedService) {
        this.identityService = identityService;
        this.computeService = computeService;
        this.stackService = stackService;
        this.loadBalancerService = loadBalancerService;
        this.cloudVisualisedService = cloudVisualisedService;
        this.currentProject = null;
    }
    ProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.identityService.loggedIn.subscribe(function (status) { return _this.loggedIn = status; });
        this.identityService.userProjects.subscribe(function (currentProjects) { return _this.projects = currentProjects; });
        this.identityService.currentProject.subscribe(function (selectedProject) { return _this.currentProject = selectedProject; });
        // this.projectForm = new FormGroup({
        //  'projectData': new FormGroup({
        //    'project': new FormControl(null, [Validators.required])
        //  })
        // });
        // this.projects = this.identityService.k5projects;
        //console.log('NGONINIT on Projects Component - Projects, Project, Logged In Status are as follows (next three lines) : ');
        //console.log(this.projects);
        //     for (let index in this.projects) {
        //       //console.log(this.projects[index].name);
        //   }
        //   for (let project of this.projects.project) {
        //     //console.log(project.name);
        // }
        //console.log(this.currentProject);
        //console.log(this.loggedIn);
    };
    ProjectComponent.prototype.onLogout = function () {
        this.identityService.logout();
        // this.loginForm.reset();
        // this.loggedIn = false;
    };
    ProjectComponent.prototype.projectChange = function (selectedProject) {
        this.computeService.changeServerDetails(null);
        this.computeService.changeServerList(null);
        this.computeService.changeServerLogs(null);
        this.stackService.changeStackList(null);
        this.stackService.changeStackDetails(null);
        this.stackService.changeStackOutputs(null);
        this.loadBalancerService.changeLBaaSList(null);
        this.loadBalancerService.changeLBaaSDetails(null);
        this.identityService.changeProject(selectedProject);
        //console.log('333333333333. Selected Project ID to be scoped to...');
        //console.log(selectedProject.id);
        //console.log(selectedProject.name);
        //console.log(selectedProject);
        this.identityService.getProjectScopedToken(selectedProject.id)
            .subscribe(function (data) {
            //console.log(data);
        }, function (err) { return console.log(err); }, function () {
        });
        //console.log('PROJECT CHANGE SELECTED Projects, Project, Logged In Status are as follows (next three lines) : ');
        //console.log(this.projects);
        //console.log(this.currentProject);
        //console.log(this.loggedIn);
    };
    return ProjectComponent;
}());
ProjectComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-project',
        template: __webpack_require__("../../../../../src/app/project.component.html"),
        styles: [__webpack_require__("../../../../../src/app/project.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_identity_service__["a" /* IdentityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_identity_service__["a" /* IdentityService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_compute_service__["a" /* ComputeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_compute_service__["a" /* ComputeService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_stack_service__["a" /* StackService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_stack_service__["a" /* StackService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_loadbalancer_service__["a" /* LoadbalancerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_loadbalancer_service__["a" /* LoadbalancerService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_cloudvisualised_service__["a" /* CloudvisualisedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_cloudvisualised_service__["a" /* CloudvisualisedService */]) === "function" && _e || Object])
], ProjectComponent);

var _a, _b, _c, _d, _e;
// .subscribe(
//   res => {},
//   err => console.log(err),
//   () => {//console.log('End of new Project Selection');
//           this.cloudvisualisedService.getNodes(); }); 
//# sourceMappingURL=project.component.js.map

/***/ }),

/***/ "../../../../../src/app/router.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/router.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf='currentProjectT' class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div *ngIf='userRouters' class=\"col-md-6\">\r\n      <div class=\"panel panel-default\">\r\n        <div class=\"panel-heading\">\r\n          <h3 class=\"panel-title\">\r\n            Routers \r\n          </h3>\r\n        </div>\r\n        <div class=\"fixed-panel panel-body\">\r\n          <div *ngFor='let router of userRouters'>\r\n            <li    value=\"router | json | removeQuotes\"\r\n                    (click)=\"routerChange(router)\">{{router.name | json | removeQuotes}}</li>\r\n          </div>\r\n        </div>\r\n        <div class=\"panel-footer\">\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div *ngIf='routerDetails' class=\"col-md-6\">\r\n      <div class=\"panel panel-default\">\r\n        <div class=\"panel-heading\">\r\n          <h3 class=\"panel-title\">\r\n            Router {{routerDetails.name | json | removeQuotes}}\r\n          </h3>\r\n        </div>\r\n        <div class=\"fixed-panel panel-body\">\r\n          <div>\r\n            {{routerDetails| json| removeQuotes}}\r\n          </div>\r\n        </div>\r\n        <div class=\"panel-heading\">\r\n            <h3 class=\"panel-title\">\r\n            Current Routes\r\n          </h3>\r\n        </div>\r\n        <div class=\"fixed-panel panel-body\">\r\n            <div>\r\n              {{routerDetails.routes| json| removeQuotes}}\r\n            </div>\r\n          </div>\r\n          <div *ngIf='routerStatus'>\r\n          <div *ngIf='routerStatus.status != 200' class=\"panel-heading\">\r\n              <h3 class=\"panel-title\">\r\n              Route Update Status\r\n            </h3>\r\n          </div>\r\n          <div *ngIf='routerStatus.status != 200' class=\"fixed-panel panel-body\">\r\n              <div>\r\n                {{routerStatus| json| removeQuotes}}\r\n              </div>\r\n            </div>\r\n          </div>\r\n        <div class=\"panel-footer\">\r\n            <form [formGroup]=\"newRoutesForm\" >\r\n                <div formGroupName=\"routeData\">\r\n                    <div class=\"form-group\">\r\n                      <label for=\"routes\">\r\n                        Routes\r\n                      </label>\r\n                      <input \r\n                        type=\"text\" \r\n                        class=\"form-control\" \r\n                        id=\"routes\"\r\n                        formControlName=\"routes\">\r\n                      <span\r\n                        *ngIf=\"!newRoutesForm.get('routeData.routes').valid && newRoutesForm.get('routeData.routes').touched\"\r\n                        class=\"help-block\">Please enter valid K5 routes e.g. \r\n                        [{{'{'}}\r\n                        \"nexthop\": \"192.168.0.7\", \"destination\": \"10.0.0.0/24\"{{'}'}},\r\n                        {{'{'}}\r\n                        \"nexthop\": \"192.168.0.7\", \"destination\": \"172.16.0.0/24\"{{'}'}},\r\n                        {{'{'}}\r\n                        \"nexthop\": \"192.168.0.254\", \"destination\": \"0.0.0/0\"\r\n                        {{'}'}}]\r\n                     </span>\r\n                    </div>\r\n                  </div>\r\n            \r\n            <button type=\"button\" class=\"btn-xl btn btn-info\" [disabled]=\"!newRoutesForm.get('routeData').valid\" (click)=\"onRouteAppend(newRoutesForm.get('routeData.routes').value)\">Append To Existing Routes</button>\r\n            <button type=\"button\" class=\"btn-xl btn btn-success\" [disabled]=\"!newRoutesForm.get('routeData').valid\" (click)=\"onRouteReplace(newRoutesForm.get('routeData.routes').value)\">Replace Existing Routes</button>\r\n            <button type=\"button\" class=\"btn-xl btn btn-danger\" (click)=\"onRouteDelete()\">Purge All Routes</button>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/router.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_network_service__ = __webpack_require__("../../../../../src/app/services/network.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_identity_service__ = __webpack_require__("../../../../../src/app/services/identity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RouterComponent = (function () {
    function RouterComponent(networkService, identityService) {
        this.networkService = networkService;
        this.identityService = identityService;
    }
    RouterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.networkService.userRouters.subscribe(function (routers) { return _this.userRouters = routers; });
        this.networkService.routerDetails.subscribe(function (routerDetail) { return _this.routerDetails = routerDetail; });
        this.networkService.routerStatus.subscribe(function (routerUpdateStatus) { return _this.routerStatus = routerUpdateStatus; });
        this.identityService.userPToken.subscribe(function (currentProjectToken) { return _this.currentProjectT = currentProjectToken; });
        this.newRoutesForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]({
            'routeData': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]({
                'routes': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required])
            })
        });
        console.log('Router Details');
        console.log(this.userRouters);
    };
    RouterComponent.prototype.routerChange = function (router) {
        console.log(router);
        this.networkService.getRouterDetails(this.currentProjectT, router);
        this.currentRouter = router;
        //console.log('Change LBaaS Detail => ');
        //console.log(this.userLBaaSDetails);
    };
    RouterComponent.prototype.onRouteReplace = function (routes) {
        this.networkService.updateRouterRoutes(this.currentProjectT, this.currentRouter, routes);
        this.newRoutesForm.reset();
    };
    RouterComponent.prototype.onRouteAppend = function (routes) {
        var newRoutes = null;
        if (this.routerDetails.routes.length > 0) {
            newRoutes = JSON.parse(routes);
            var existingRoutes = this.routerDetails.routes;
            for (var _i = 0, newRoutes_1 = newRoutes; _i < newRoutes_1.length; _i++) {
                var newRoute = newRoutes_1[_i];
                existingRoutes.push(newRoute);
                newRoutes = existingRoutes;
            }
            newRoutes = JSON.stringify(existingRoutes);
        }
        this.networkService.updateRouterRoutes(this.currentProjectT, this.currentRouter, newRoutes);
        this.newRoutesForm.reset();
        console.log(this.routerStatus);
    };
    RouterComponent.prototype.onRouteDelete = function () {
        this.networkService.updateRouterRoutes(this.currentProjectT, this.currentRouter, '[]');
        this.newRoutesForm.reset();
    };
    return RouterComponent;
}());
RouterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-router',
        template: __webpack_require__("../../../../../src/app/router.component.html"),
        styles: [__webpack_require__("../../../../../src/app/router.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_network_service__["a" /* NetworkService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_network_service__["a" /* NetworkService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_identity_service__["a" /* IdentityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_identity_service__["a" /* IdentityService */]) === "function" && _b || Object])
], RouterComponent);

var _a, _b;
//# sourceMappingURL=router.component.js.map

/***/ }),

/***/ "../../../../../src/app/server.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/server.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"passwordForm\" >        \r\n<div *ngIf=\"passwordForm.get('serverData.project').valid\" class=\"form-group\">\r\n          <label for=\"server\">\r\n            Please select a server\r\n          </label>\t\t\t\t\t\r\n          <select\r\n            id=\"server\"\r\n            class=\"form-control\"\r\n            formControlName=\"server\"\t\t\t\t\t\t\r\n            name=\"server\"\r\n            (change)=\"serverChange()\">\r\n            <option [value]=\"null\">Choose a server</option>\r\n            <option *ngFor=\"let server of servers | sortObjectsByName\" [value]=\"server.id\">{{server.name}}</option>\r\n            \r\n          </select>\r\n          <span\r\n            *ngIf=\"!passwordForm.get('serverData.server').valid && passwordForm.get('serverData.server').touched\"\r\n            class=\"help-block\">Please select a windows server from the list\r\n          </span>\r\n        </div>\r\n        <div *ngIf=\"passwordReceived\" class=\"form-group\">\r\n          <label for=\"server\">\r\n            Encrypted password\r\n          </label>\r\n          <p class=\"form-control\">{{encryptedPassword}}</p>\r\n\r\n        </div>\r\n        <div *ngIf=\"passwordForm.get('serverData.server').valid\" class=\"form-group\">\r\n          <label for=\"pemkey\">\r\n            Paste private ssh key below\r\n          </label>\t\t\t\t\t\r\n          <textarea\r\n            name=\"pemkey\"\r\n            rows=\"3\"\r\n            class=\"form-control\"\r\n            formControlName=\"pemkey\">\r\n          </textarea>\r\n          <span\r\n            *ngIf=\"!passwordForm.get('serverData.pemkey').valid && passwordForm.get('serverData.pemkey').touched\"\r\n            class=\"help-block\">Please paste the private ssh key file that is associated with the public ssh key used to build the server\r\n          </span>\t\t\t\t\t\t\r\n        </div>\r\n        <div *ngIf=\"passwordForm.get('serverData').valid\" class=\"form-group\">\r\n          <button type=\"button\" (click)=\"onThisButton()\" class=\"btn btn-primary btn-large\" [disabled]=\"!passwordForm.get('loginData').valid\">\r\n            Retrieve Password\r\n          </button>\r\n        </div>\r\n    <div *ngIf=\"passwordForm.get('serverData').valid\" class=\"form-group\">\r\n      <div class=\"jumbotron\">\r\n        <h2>\r\n          The password is\r\n        </h2>\r\n        <p>\r\n          An amazing Password\r\n        </p>\r\n      </div>\r\n    </div>\r\n    \r\n   </form>\r\n"

/***/ }),

/***/ "../../../../../src/app/server.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServerComponent = (function () {
    function ServerComponent() {
    }
    ServerComponent.prototype.ngOnInit = function () {
    };
    return ServerComponent;
}());
ServerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-server',
        template: __webpack_require__("../../../../../src/app/server.component.html"),
        styles: [__webpack_require__("../../../../../src/app/server.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ServerComponent);

//# sourceMappingURL=server.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/cloudvisualised.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloudvisualisedService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VisualLink = (function () {
    function VisualLink(source, target, weight) {
        this.source = source;
        this.target = target;
        this.weight = weight || 1;
    }
    return VisualLink;
}());
var VisualNode = (function () {
    function VisualNode(type, id, name, availability_zone) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.availability_zone = availability_zone;
        this.links = [];
    }
    VisualNode.prototype.addLink = function (link) {
        this.links.push(link);
    };
    return VisualNode;
}());
var VisualisationData = (function () {
    function VisualisationData(nodes, links) {
        this.nodes = nodes;
        this.links = links;
    }
    return VisualisationData;
}());
var CloudvisualisedService = (function () {
    function CloudvisualisedService() {
        this.localNodeList = new Array();
        this.localEdgeList = new Array();
        this.nodeList = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.currentNodeList = this.nodeList.asObservable();
        this.edgeList = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.currentEdgeList = this.edgeList.asObservable();
        this.visualData = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.currentVisualData = this.visualData.asObservable();
    }
    CloudvisualisedService.prototype.changeVisualData = function (data) {
        this.visualData.next(data);
    };
    CloudvisualisedService.prototype.updateNodeList = function (nodes) {
        //console.log('Update Called');
        this.nodeList.next(nodes);
    };
    CloudvisualisedService.prototype.resetNodeList = function () {
        //console.log('Reset Called');
        this.localNodeList = new Array();
        this.nodeList.next(this.localNodeList);
    };
    CloudvisualisedService.prototype.locateIndexinNodeList = function (item, nodeList) {
        for (var _i = 0, nodeList_1 = nodeList; _i < nodeList_1.length; _i++) {
            var node = nodeList_1[_i];
            if (item === node.id) {
                //console.log('link Match') ;
                //console.log(node.id, item);
                return nodeList.indexOf(node);
            }
        }
        //console.log('link No Match') ;
        // //console.log(node.id, item);
        return false;
    };
    CloudvisualisedService.prototype.generateEdges = function (nodelist) {
        this.localEdgeList = new Array();
        for (var node in nodelist) {
            //console.log('Processing Node ', node);
            for (var _i = 0, _a = nodelist[node].links; _i < _a.length; _i++) {
                var link = _a[_i];
                var linkIndex = this.locateIndexinNodeList(link, this.localNodeList);
                if (linkIndex) {
                    //console.log('target');
                    //console.log(linkIndex);
                    //console.log('source');
                    //console.log(node);
                    var newLink = new VisualLink(+node, linkIndex);
                    this.localEdgeList.push(newLink);
                }
                // let source: number = +node;
                // let target: number = nodelist.indexOf(link);
                // this.localEdgeList.push(source,target);
            }
        }
        //console.log('Finished Link List');
        //console.log(this.localEdgeList);
    };
    CloudvisualisedService.prototype.getNodes = function (type, nodelist) {
        //console.log('Visualisation Nodes ' + type);
        //console.log(nodelist);
        this.localNodeList = this.nodeList.getValue();
        for (var _i = 0, nodelist_1 = nodelist; _i < nodelist_1.length; _i++) {
            var node = nodelist_1[_i];
            //console.log(node);
            var newNode = new VisualNode(type, node.id, node.name, node.availability_zone);
            // let newEdge = new VisualLink(1, 1);
            switch (type) {
                case 'port': {
                    // statements;
                    //newNode.availability_zone = node.availability_zone;
                    console.log(node);
                    var subtype = (node.device_owner).split(':');
                    if (node.name === '') {
                        newNode.name = node.id;
                    }
                    if (subtype[1] === 'dhcp') {
                        newNode.name = type + ': ' + subtype[1] + ': ' + newNode.name;
                        newNode.type = type + ': ' + subtype[1];
                    }
                    else {
                        newNode.name = type + ': ' + subtype[0] + ': ' + newNode.name;
                        newNode.type = type + ': ' + subtype[0];
                    }
                    newNode.status = node.status;
                    newNode.addLink(node.device_id);
                    // newNode.addLink(node.network_id);
                    for (var _a = 0, _b = node.fixed_ips; _a < _b.length; _a++) {
                        var link = _b[_a];
                        if (link['subnet_id']) {
                            newNode.addLink(link['subnet_id']);
                        }
                    }
                    break;
                }
                case 'network': {
                    // statements;
                    console.log(node);
                    if (node['router:external'] === true) {
                        console.log('External Network');
                        newNode.status = node.status;
                        for (var _c = 0, _d = node.subnets; _c < _d.length; _c++) {
                            var link = _d[_c];
                            //console.log('Network Subnets');
                            //console.log(node.subnets);
                            //console.log(link);
                            newNode.addLink(link);
                        }
                        newNode.name = type + ': ' + newNode.name;
                    }
                    else {
                        console.log('Unwanted Network');
                        continue;
                    }
                    break;
                }
                case 'subnetwork': {
                    // statements;
                    if (node.enable_dhcp) {
                        newNode.status = 'DHCP';
                    }
                    else {
                        newNode.status = 'NO_DHCP';
                    }
                    //console.log('failing here => ' + node.network_id);
                    newNode.addLink(node.network_id);
                    newNode.name = type + ': ' + newNode.name;
                    break;
                }
                case 'router': {
                    // statements;
                    //console.log(node);
                    newNode.status = node.status;
                    if (node.external_gateway_info != null) {
                        newNode.addLink(node.external_gateway_info.external_fixed_ips[0]['subnet_id']);
                    }
                    else {
                        newNode.addLink(node.id);
                    }
                    newNode.name = type + ': ' + newNode.name;
                    break;
                }
                case 'lbaas': {
                    // statements;
                    newNode.name = node.LoadBalancerName;
                    newNode.status = node.State;
                    newNode.other = node.DNSName;
                    newNode.id = node.LoadBalancerName;
                    for (var _e = 0, _f = node.Subnets; _e < _f.length; _e++) {
                        var link = _f[_e];
                        newNode.addLink(link['member']);
                    }
                    newNode.name = type + ': ' + newNode.name;
                    break;
                }
                default: {
                    // statements;
                    break;
                }
            }
            //console.log(newNode);
            // //console.log(this.routers);
            // //console.log(this.loadbalancers);
            this.localNodeList.push(newNode);
        }
        //console.log(this.localNodeList);
        this.updateNodeList(this.localNodeList);
        //console.log(this.currentNodeList);
        this.generateEdges(this.localNodeList);
        this.k5Nodes = new VisualisationData(this.localNodeList, this.localEdgeList);
        console.log('Final OutPut for D3JS');
        console.log(this.k5Nodes);
        //console.log(this.k5Nodes);
        this.changeVisualData(this.k5Nodes);
    };
    return CloudvisualisedService;
}());
CloudvisualisedService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], CloudvisualisedService);

//# sourceMappingURL=cloudvisualised.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/compute.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_utility_service__ = __webpack_require__("../../../../../src/app/services/utility.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComputeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ComputeService = (function () {
    // private userProjectToken = new BehaviorSubject<Response>(null);
    // userPToken = this.userProjectToken.asObservable();
    // currentProject: project = null;
    // currentProjectToken: Response = null;
    function ComputeService(http, utilitiesService) {
        this.http = http;
        this.utilitiesService = utilitiesService;
        this.userServerList = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.userServers = this.userServerList.asObservable();
        this.userServerDetails = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.serverDetails = this.userServerDetails.asObservable();
        this.userServerLogs = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.serverLogs = this.userServerLogs.asObservable();
    }
    ComputeService.prototype.changeServerLogs = function (serverLogs) {
        this.userServerLogs.next(serverLogs);
    };
    ComputeService.prototype.changeServerList = function (userServers) {
        this.userServerList.next(userServers);
    };
    ComputeService.prototype.changeServerDetails = function (serverDetails) {
        this.userServerDetails.next(serverDetails);
    };
    ComputeService.prototype.getServerList = function (k5scopedtoken) {
        //console.log('compute token');
        //console.log(k5scopedtoken);
        var _this = this;
        var computeURL = this.utilitiesService.getEndpoint(k5scopedtoken, 'compute');
        computeURL = computeURL.concat('/servers/detail');
        // With CORS Proxy Service in use here
        var proxiedURL = this.utilitiesService.sendViaCORSProxy(computeURL);
        var getheaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        getheaders.append('Content-Type', 'application/json');
        getheaders.append('Accept', 'application/json');
        getheaders.append('X-Auth-Token', k5scopedtoken.headers.get('x-subject-token'));
        var headeropts = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
        headeropts.headers = getheaders;
        return this.http.get(proxiedURL, headeropts)
            .map(function (res) {
            //console.log('New Server List ->');
            //console.log(res.json().servers);
            _this.changeServerList(res.json().servers);
            // return res;
        })
            .subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); }, function () { return console.log('Server list complete'); });
    };
    ComputeService.prototype.getServerDetails = function (k5scopedtoken, server) {
        var _this = this;
        var computeURL = this.utilitiesService.getEndpoint(k5scopedtoken, 'compute');
        computeURL = computeURL.concat('/servers/', server.id);
        // With CORS Proxy Service in use here
        var proxiedURL = this.utilitiesService.sendViaCORSProxy(computeURL);
        var getheaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        getheaders.append('Content-Type', 'application/json');
        getheaders.append('Accept', 'application/json');
        getheaders.append('X-Auth-Token', k5scopedtoken.headers.get('x-subject-token'));
        var headeropts = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
        headeropts.headers = getheaders;
        return this.http.get(proxiedURL, headeropts)
            .map(function (res) {
            //console.log('nova server details');
            //console.log(res.json().server);
            _this.changeServerDetails(res.json().server);
            return res;
        })
            .subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); }, function () { return console.log('yay'); });
    };
    ComputeService.prototype.getServerPassword = function (k5scopedtoken, serverid) {
        //console.log('Server Password Function');
        //console.log(k5scopedtoken);
        //console.log(serverid);
        var computeURL = this.utilitiesService.getEndpoint(k5scopedtoken, 'compute');
        computeURL = computeURL.concat('/servers/', serverid, '/os-server-password');
        // With CORS Proxy Service in use here
        var proxiedURL = this.utilitiesService.sendViaCORSProxy(computeURL);
        var getheaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        getheaders.append('Content-Type', 'application/json');
        getheaders.append('Accept', 'application/json');
        getheaders.append('X-Auth-Token', k5scopedtoken.headers.get('x-subject-token'));
        var headeropts = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
        headeropts.headers = getheaders;
        return this.http.get(proxiedURL, headeropts)
            .map(function (res) {
            //console.log('server password');
            //console.log(res.json().password);
            return res.json().password;
        });
    };
    ComputeService.prototype.getServerLogs = function (k5scopedtoken, server) {
        //console.log('Server Logs Function');
        //console.log(k5scopedtoken);
        //console.log(server.id);
        var _this = this;
        var computeURL = this.utilitiesService.getEndpoint(k5scopedtoken, 'compute');
        computeURL = computeURL.concat('/servers/', server.id, '/action');
        // With CORS Proxy Service in use here
        var proxiedURL = this.utilitiesService.sendViaCORSProxy(computeURL);
        var body = {
            'os-getConsoleOutput': {
                'length': 1000
            }
        };
        var bodyString = JSON.stringify(body); // Stringify payload
        var postheaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        postheaders.append('Content-Type', 'application/json');
        postheaders.append('Accept', 'application/json');
        postheaders.append('X-Auth-Token', k5scopedtoken.headers.get('x-subject-token'));
        var headeropts = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
        headeropts.headers = postheaders;
        return this.http.post(proxiedURL, bodyString, headeropts)
            .map(function (res) {
            _this.changeServerLogs(res.json().output);
            //console.log('server logs');
            //console.log(res.json().output);
            // return res.json().password;
        })
            .subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); }, function () { return console.log('got logs complete'); });
    };
    return ComputeService;
}());
ComputeService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_utility_service__["a" /* UtilityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_utility_service__["a" /* UtilityService */]) === "function" && _b || Object])
], ComputeService);

var _a, _b;
//# sourceMappingURL=compute.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/convert-group-idto-name.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_identity_service__ = __webpack_require__("../../../../../src/app/services/identity.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConvertGroupIDtoNamePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConvertGroupIDtoNamePipe = (function () {
    function ConvertGroupIDtoNamePipe(identityService) {
        var _this = this;
        this.identityService = identityService;
        this.contractGroups = null;
        this.identityService.contractGroups.subscribe(function (groups) { return _this.contractGroups = groups; });
        // //console.log('Contract  Group IDs in Pipe constructor');
        // //console.log(this.contractGroups);
    }
    ConvertGroupIDtoNamePipe.prototype.transform = function (value, args) {
        // //console.log('Contract Users iside Pipe');
        // //console.log(this.contractGroups);
        var itemName = 'None';
        for (var item in this.contractGroups) {
            if (this.contractGroups[item].id === value) {
                // //console.log('Group Comparison');
                // //console.log(value);
                // //console.log((this.contractGroups[item].id));
                // //console.log('Group PipeMatch' + (this.contractGroups[item].name));
                itemName = this.contractGroups[item].name;
                break;
            }
            else {
                // //console.log('Group Comparison');
                // //console.log(value);
                // //console.log((this.contractGroups[item].id));
            }
        }
        return itemName;
    };
    return ConvertGroupIDtoNamePipe;
}());
ConvertGroupIDtoNamePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({
        name: 'convertGroupIDtoName'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_identity_service__["a" /* IdentityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_identity_service__["a" /* IdentityService */]) === "function" && _a || Object])
], ConvertGroupIDtoNamePipe);

var _a;
//# sourceMappingURL=convert-group-idto-name.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/services/convert-project-idto-name.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_identity_service__ = __webpack_require__("../../../../../src/app/services/identity.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConvertProjectIDtoNamePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConvertProjectIDtoNamePipe = (function () {
    function ConvertProjectIDtoNamePipe(identityService) {
        var _this = this;
        this.identityService = identityService;
        this.contractProjects = null;
        this.identityService.contractProjects.subscribe(function (projects) { return _this.contractProjects = projects; });
        // //console.log('Contract Project IDs in Pipe constructor');
        // //console.log(this.contractProjects);
    }
    ConvertProjectIDtoNamePipe.prototype.transform = function (value, args) {
        // //console.log('Contract Users iside Pipe');
        // //console.log(this.contractProjects);
        var itemName = 'None';
        for (var item in this.contractProjects) {
            if (this.contractProjects[item].id === value) {
                // //console.log('Comparison');
                // //console.log(value);
                // //console.log((this.contractProjects[item].id));
                // //console.log('PipeMatch' + (this.contractProjects[item].name));
                itemName = this.contractProjects[item].name;
                break;
            }
            else {
                // //console.log('Comparison');
                // //console.log(value);
                // //console.log((this.contractProjects[item].id));
            }
        }
        return itemName;
    };
    return ConvertProjectIDtoNamePipe;
}());
ConvertProjectIDtoNamePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({
        name: 'convertProjectIDtoName'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_identity_service__["a" /* IdentityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_identity_service__["a" /* IdentityService */]) === "function" && _a || Object])
], ConvertProjectIDtoNamePipe);

var _a;
//# sourceMappingURL=convert-project-idto-name.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/services/convert-role-idto-name.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_identity_service__ = __webpack_require__("../../../../../src/app/services/identity.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConvertRoleIDtoNamePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConvertRoleIDtoNamePipe = (function () {
    function ConvertRoleIDtoNamePipe(identityService) {
        var _this = this;
        this.identityService = identityService;
        this.contractRoles = null;
        this.identityService.contractRoles.subscribe(function (roles) { return _this.contractRoles = roles; });
        // //console.log('Contract IDs in Pipe constructor');
        // //console.log(this.contractRoles);
    }
    ConvertRoleIDtoNamePipe.prototype.transform = function (value, args) {
        // //console.log('Contract Users iside Pipe');
        // //console.log(this.contractRoles);
        var itemName = 'None';
        for (var item in this.contractRoles) {
            if (this.contractRoles[item].id === value) {
                // //console.log('Comparison');
                // //console.log(value);
                // //console.log((this.contractRoles[item].id));
                // //console.log('PipeMatch' + (this.contractRoles[item].name));
                itemName = this.contractRoles[item].name;
                break;
            }
            else {
                // //console.log('Comparison');
                // //console.log(value);
                // //console.log((this.contractRoles[item].id));
            }
        }
        return itemName;
    };
    return ConvertRoleIDtoNamePipe;
}());
ConvertRoleIDtoNamePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({
        name: 'convertRoleIDtoName'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_identity_service__["a" /* IdentityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_identity_service__["a" /* IdentityService */]) === "function" && _a || Object])
], ConvertRoleIDtoNamePipe);

var _a;
//# sourceMappingURL=convert-role-idto-name.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/services/convert-subset2-array.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConvertSubset2ArrayPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ConvertSubset2ArrayPipe = (function () {
    function ConvertSubset2ArrayPipe() {
    }
    ConvertSubset2ArrayPipe.prototype.transform = function (value, args) {
        var keys = [];
        for (var key in value) {
            keys.push({ key: key, value: value[key] });
        }
        return keys;
    };
    return ConvertSubset2ArrayPipe;
}());
ConvertSubset2ArrayPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({
        name: 'convertSubset2Array'
    })
], ConvertSubset2ArrayPipe);

//# sourceMappingURL=convert-subset2-array.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/services/convert-user-idto-name.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_identity_service__ = __webpack_require__("../../../../../src/app/services/identity.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConvertUserIDtoNamePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConvertUserIDtoNamePipe = (function () {
    function ConvertUserIDtoNamePipe(identityService) {
        var _this = this;
        this.identityService = identityService;
        this.contractUsers = null;
        this.identityService.contractUsers.subscribe(function (users) { return _this.contractUsers = users; });
        // //console.log('Contract User IDs in Pipe constructor');
        // //console.log(this.contractUsers);
    }
    ConvertUserIDtoNamePipe.prototype.transform = function (value, args) {
        // //console.log('Contract Users iside Pipe');
        // //console.log(this.contractUsers);
        var itemName = 'None';
        for (var item in this.contractUsers) {
            if (this.contractUsers[item].id === value) {
                // //console.log('Comparison');
                // //console.log(value);
                // //console.log((this.contractUsers[item].id));
                // //console.log('PipeMatch' + (this.contractUsers[item].name));
                itemName = this.contractUsers[item].name;
                break;
            }
            else {
                // //console.log('Comparison');
                // //console.log(value);
                // //console.log((this.contractUsers[item].id));
            }
        }
        return itemName;
    };
    return ConvertUserIDtoNamePipe;
}());
ConvertUserIDtoNamePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({
        name: 'convertUserIDtoName'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_identity_service__["a" /* IdentityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_identity_service__["a" /* IdentityService */]) === "function" && _a || Object])
], ConvertUserIDtoNamePipe);

var _a;
//# sourceMappingURL=convert-user-idto-name.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/services/display-object.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisplayObjectPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DisplayObjectPipe = (function () {
    function DisplayObjectPipe() {
    }
    DisplayObjectPipe.prototype.transform = function (value, args) {
        return Object.keys(value).map(function (key) {
            Object.assign({ key: key }, value[key]);
            // //console.log("Piping Object");
            // //console.log(key);
            // //console.log(value[key].name);
        });
    };
    return DisplayObjectPipe;
}());
DisplayObjectPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({
        name: 'displayObject'
    })
], DisplayObjectPipe);

//# sourceMappingURL=display-object.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/services/identity.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ipsecvpn_service__ = __webpack_require__("../../../../../src/app/services/ipsecvpn.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cloudvisualised_service__ = __webpack_require__("../../../../../src/app/services/cloudvisualised.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__network_service__ = __webpack_require__("../../../../../src/app/services/network.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stack_service__ = __webpack_require__("../../../../../src/app/services/stack.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__loadbalancer_service__ = __webpack_require__("../../../../../src/app/services/loadbalancer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_user__ = __webpack_require__("../../../../../src/app/model/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utility_service__ = __webpack_require__("../../../../../src/app/services/utility.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__compute_service__ = __webpack_require__("../../../../../src/app/services/compute.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdentityService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var IdentityService = (function () {
    //servers: any = null;
    // k5currentScopedToken: Response;
    function IdentityService(http, utilityService, computeService, stackService, loadBalancerService, networkService, cloudvisualisedService, ipsecvpnService) {
        var _this = this;
        this.http = http;
        this.utilityService = utilityService;
        this.computeService = computeService;
        this.stackService = stackService;
        this.loadBalancerService = loadBalancerService;
        this.networkService = networkService;
        this.cloudvisualisedService = cloudvisualisedService;
        this.ipsecvpnService = ipsecvpnService;
        this.user = new __WEBPACK_IMPORTED_MODULE_5__model_user__["a" /* User */]();
        this.userProjectList = new __WEBPACK_IMPORTED_MODULE_8_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.userProjects = this.userProjectList.asObservable();
        this.contractProjectList = new __WEBPACK_IMPORTED_MODULE_8_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.contractProjects = this.contractProjectList.asObservable();
        this.contractUserList = new __WEBPACK_IMPORTED_MODULE_8_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.contractUsers = this.contractUserList.asObservable();
        this.contractRoleList = new __WEBPACK_IMPORTED_MODULE_8_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.contractRoles = this.contractRoleList.asObservable();
        this.contractGroupList = new __WEBPACK_IMPORTED_MODULE_8_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.contractGroups = this.contractGroupList.asObservable();
        this.userRegionalToken = new __WEBPACK_IMPORTED_MODULE_8_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.userRToken = this.userRegionalToken.asObservable();
        this.userGlobalToken = new __WEBPACK_IMPORTED_MODULE_8_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.userGToken = this.userGlobalToken.asObservable();
        // k5response: Response;
        // k5Globalresponse: Response;
        // loggedIn :boolean = false;
        this.userLoggedIn = new __WEBPACK_IMPORTED_MODULE_8_rxjs_BehaviorSubject__["BehaviorSubject"](false);
        this.loggedIn = this.userLoggedIn.asObservable();
        // currentProject: project;
        this.selectedProject = new __WEBPACK_IMPORTED_MODULE_8_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.currentProject = this.selectedProject.asObservable();
        this.userProjectToken = new __WEBPACK_IMPORTED_MODULE_8_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.userPToken = this.userProjectToken.asObservable();
        this.projectRoleAssignments = new __WEBPACK_IMPORTED_MODULE_8_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.roleAssignments = this.projectRoleAssignments.asObservable();
        this.usersInGroupList = new __WEBPACK_IMPORTED_MODULE_8_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.usersInGroup = this.usersInGroupList.asObservable();
        this.availabilityZoneList = new __WEBPACK_IMPORTED_MODULE_8_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.availabilityZones = this.availabilityZoneList.asObservable();
        this.currentAvailabilityZone = new __WEBPACK_IMPORTED_MODULE_8_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.currentAZ = this.currentAvailabilityZone.asObservable();
        // this.computeService.userServers.subscribe(currentServers => this.servers = currentServers);
        this.ipsecvpnService.ipsecPolicies.subscribe(function (policies) { return _this.ipsecPolicies = policies; });
        this.ipsecvpnService.ipsecPolicy.subscribe(function (policy) { return _this.ipsecPolicy = policy; });
        this.ipsecvpnService.ikePolicies.subscribe(function (policies) { return _this.ikePolicies = policies; });
        this.ipsecvpnService.ikePolicy.subscribe(function (policy) { return _this.ikePolicy = policy; });
        this.ipsecvpnService.vpnServices.subscribe(function (services) { return _this.vpnServices = services; });
        this.ipsecvpnService.vpnService.subscribe(function (service) { return _this.vpnService = service; });
        this.ipsecvpnService.ipsecConnections.subscribe(function (connections) { return _this.ipsecConnections = connections; });
        this.ipsecvpnService.ipsecConnection.subscribe(function (connection) { return _this.ipsecConnection = connection; });
    }
    IdentityService.prototype.changeAZList = function (azones) {
        this.availabilityZoneList.next(azones);
    };
    IdentityService.prototype.changeAZ = function (azone) {
        this.currentAvailabilityZone.next(azone);
    };
    IdentityService.prototype.changeUsersInGroup = function (users) {
        this.usersInGroupList.next(users);
    };
    IdentityService.prototype.changeRoleAssignments = function (roleAssignments) {
        this.projectRoleAssignments.next(roleAssignments);
    };
    IdentityService.prototype.changeContractUsers = function (contractUsers) {
        this.contractUserList.next(contractUsers);
    };
    IdentityService.prototype.changeContractGroups = function (contractGroups) {
        this.contractGroupList.next(contractGroups);
    };
    IdentityService.prototype.changeContractRoles = function (contractRoles) {
        this.contractRoleList.next(contractRoles);
    };
    IdentityService.prototype.changeContractProjects = function (contractProjects) {
        this.contractProjectList.next(contractProjects);
    };
    IdentityService.prototype.changeProject = function (currentProject) {
        this.selectedProject.next(currentProject);
    };
    IdentityService.prototype.changeProjectList = function (userProjects) {
        this.userProjectList.next(userProjects);
    };
    IdentityService.prototype.changeLoginStatus = function (loggedInStatus) {
        this.userLoggedIn.next(loggedInStatus);
    };
    IdentityService.prototype.changeRegionalToken = function (userRToken) {
        this.userRegionalToken.next(userRToken);
    };
    IdentityService.prototype.changeGlobalToken = function (userGToken) {
        this.userGlobalToken.next(userGToken);
    };
    IdentityService.prototype.changeProjectToken = function (userPToken) {
        this.userProjectToken.next(userPToken);
    };
    IdentityService.prototype.getKeystoneObjectList = function (objectType) {
        // const k5token = this.k5response;
        // //console.log('Keystone Token Details ' + JSON.stringify(this.userRegionalToken.getValue()));
        //console.log('Keystone ObjectType Details ' + objectType);
        var identityURL = this.utilityService.getEndpoint(this.userRegionalToken.getValue(), 'identityv3');
        var endpointDetail = identityURL.concat('/', objectType, '?domain_id=', this.userRegionalToken.getValue().json().token.user.domain.id);
        // With CORS Proxy Service in use here
        var authURL = this.utilityService.sendViaCORSProxy(endpointDetail);
        // retrieve the K5/OpenStack authentication token from the response header
        var token = this.userRegionalToken.getValue().headers.get('x-subject-token');
        //console.log('Getting KeystoneObject List' + JSON.stringify(authURL));
        var postheaders = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* Headers */]();
        postheaders.append('Content-Type', 'application/json');
        postheaders.append('Accept', 'application/json');
        postheaders.append('X-Auth-Token', token);
        var postopts = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* RequestOptions */]();
        postopts.headers = postheaders;
        return this.http.get(authURL, postopts)
            .map(function (res) {
            // //console.log(' Map ObjectList => ' + JSON.stringify(res));
            return res;
        });
    };
    IdentityService.prototype.getProjectScopedToken = function (projectId) {
        var _this = this;
        // const k5token = this.k5response;
        //console.log('New Scoped Project Pre-Response');
        //console.log(this.userRegionalToken.getValue());
        var identityURL = this.utilityService.getEndpoint(this.userRegionalToken.getValue(), 'identityv3');
        var endpointDetail = identityURL.concat('/auth/tokens');
        // With CORS Proxy Service in use here
        var authURL = this.utilityService.sendViaCORSProxy(endpointDetail);
        var body = { 'auth': { 'identity': { 'methods': ['token'],
                    'token': { 'id': this.userRegionalToken.getValue().headers.get('x-subject-token') }
                }, 'scope': { 'project': { 'id': projectId }
                }
            }
        };
        var bodyString = JSON.stringify(body); // Stringify payload
        var postheaders = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* Headers */]();
        postheaders.append('Content-Type', 'application/json');
        postheaders.append('Accept', 'application/json');
        var postopts = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* RequestOptions */]();
        postopts.headers = postheaders;
        return this.http.post(authURL, bodyString, postopts)
            .map(function (res) {
            // const projectToken = new ProjectToken();
            // retrieve the K5/OpenStack authentication token from the response header
            // projectToken.scopedToken = res.headers.get('x-subject-token');
            // projectToken.projectId = projectId;
            // console.log('New Project Scoped Token response ->');
            // console.log(res);
            _this.changeProjectToken(res);
            //this.ipsecvpnService.ipsecPolicyCreate(res, 'freddy', 'esp', 'sha1', 'aes-256', 'tunnel', 'group5', 3600, 'uk-1a');
            // console.log('Return Policy Below');
            // console.log(policy);
            //this.ipsecvpnService.ipsecPolicyUpdate(res, '23674bf7-6638-47e4-890f-324ed21fcf13', 'freddy', 'aes-256', 'group5', 3600, 'updated ipsec policy');
            _this.ipsecvpnService.ipsecPoliciesList(res);
            _this.ipsecvpnService.ipsecSiteConnectionsList(res);
            _this.ipsecvpnService.ikePoliciesList(res);
            _this.ipsecvpnService.vpnServicesList(res);
            //this.ipsecvpnService.ipsecPolicyShow(res, '23674bf7-6638-47e4-890f-324ed21fcf13');
            //this.ipsecvpnService.ipsecPolicyDelete(res, '23674bf7-6638-47e4-890f-324ed21fcf13');
            //this.ipsecvpnService.ipsecPolicyShow(res, '23674bf7-6638-47e4-890f-324ed21fcf13');
            _this.cloudvisualisedService.resetNodeList();
            _this.computeService.getServerList(res);
            _this.stackService.getStackList(res);
            _this.loadBalancerService.getLBaaSDetailOrList(res, 'all');
            _this.networkService.getPortList(res);
            _this.networkService.getSubnetList(res);
            _this.networkService.getNetworkList(res);
            _this.networkService.getRouterList(res);
            _this.getRoleAssignments().subscribe();
            //console.log('New Project Scoped Token observable ->');
            //console.log(this.userProjectToken.getValue());
            // //console.log('New Server List ->');
            // //console.log(this.servers.getValue());
            return res;
        });
    };
    IdentityService.prototype.getProjectList = function () {
        var _this = this;
        // const k5token = this.k5response;
        // //console.log(this.currentProject);
        var identityURL = this.utilityService.getEndpoint(this.userRegionalToken.getValue(), 'identityv3');
        // role_assignments?scope.project.id={project_id}
        var endpointDetail = identityURL.concat('/users/', this.userRegionalToken.getValue().json().token.user.id, '/projects');
        //console.log(endpointDetail);
        // With CORS Proxy Service in use here
        var authURL = this.utilityService.sendViaCORSProxy(endpointDetail);
        //console.log(authURL);
        // retrieve the K5/OpenStack authentication token from the response header
        var token = this.userRegionalToken.getValue().headers.get('x-subject-token');
        //console.log('Getting Project List');
        var postheaders = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* Headers */]();
        postheaders.append('Content-Type', 'application/json');
        postheaders.append('Accept', 'application/json');
        postheaders.append('X-Auth-Token', token);
        var postopts = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* RequestOptions */]();
        postopts.headers = postheaders;
        return this.http.get(authURL, postopts)
            .map(function (res) {
            _this.changeProjectList(res.json().projects);
            _this.changeProject(res.json().projects[0]);
            //console.log('111111111. Get Project List with projects and actual project as follows: ');
            //console.log('All Unparsed Projects');
            // //console.log(res);
            // //console.log(res.json());
            // //console.log(res.json().projects);
            //console.log(this.userProjectList.getValue());
            //console.log(this.selectedProject.getValue().name);
            // return res.json().projects as projects;
            // return projects;
        });
    };
    IdentityService.prototype.getUserInfo = function (user) {
        var _this = this;
        // const k5token = this.k5response;
        // //console.log(this.currentProject);
        var identityURL = this.utilityService.getEndpoint(this.userProjectToken.getValue(), 'identityv3');
        var endpointDetail = identityURL.concat('/users/', user.id);
        //console.log(endpointDetail);
        // With CORS Proxy Service in use here
        var authURL = this.utilityService.sendViaCORSProxy(endpointDetail);
        // retrieve the K5/OpenStack authentication token from the response header
        var token = this.userProjectToken.getValue().headers.get('x-subject-token');
        var postheaders = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* Headers */]();
        postheaders.append('Content-Type', 'application/json');
        postheaders.append('Accept', 'application/json');
        postheaders.append('X-Auth-Token', token);
        var postopts = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* RequestOptions */]();
        postopts.headers = postheaders;
        return this.http.get(authURL, postopts)
            .subscribe(function (res) {
            console.log('Getting User Info via API');
            console.log(_this.userProjectToken.getValue());
            // console.log(authURL);
            // console.log(postopts);
            // console.log(postheaders);
            // console.log('New User Info' + JSON.stringify(res));
            // console.log(res.json());
            // console.log(res);
        }, function (err) { return console.log(err); }, function () { return console.log('Getting User Info via API Complete'); });
    };
    IdentityService.prototype.getRoleAssignments = function () {
        var _this = this;
        // const k5token = this.k5response;
        // //console.log(this.currentProject);
        var identityURL = this.utilityService.getEndpoint(this.userProjectToken.getValue(), 'identityv3');
        var endpointDetail = identityURL.concat('/role_assignments?scope.project.id=', this.userProjectToken.getValue().json().token.project.id, '&include_names');
        //console.log(endpointDetail);
        // With CORS Proxy Service in use here
        var authURL = this.utilityService.sendViaCORSProxy(endpointDetail);
        //console.log(authURL);
        // retrieve the K5/OpenStack authentication token from the response header
        var token = this.userProjectToken.getValue().headers.get('x-subject-token');
        //console.log('Getting Role Assignments');
        var postheaders = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* Headers */]();
        postheaders.append('Content-Type', 'application/json');
        postheaders.append('Accept', 'application/json');
        postheaders.append('X-Auth-Token', token);
        var postopts = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* RequestOptions */]();
        postopts.headers = postheaders;
        return this.http.get(authURL, postopts)
            .map(function (res) {
            //console.log('New Role Assignments' + JSON.stringify(res));
            _this.changeRoleAssignments(res.json().role_assignments);
            //console.log(this.userProjectList.getValue());
            //console.log(this.selectedProject.getValue().name);
            // return res.json().projects as projects;
            // return projects;
        });
        // .subscribe(
        //         data => console.log(data),
        //         err => console.log(err),
        //         () => console.log('Role Assignments Complete'));
    };
    IdentityService.prototype.getUsersInGroup = function (group) {
        var _this = this;
        //console.log(group.group.id);
        // const k5token = this.k5response;
        // //console.log(this.currentProject);
        var identityURL = this.utilityService.getEndpoint(this.userProjectToken.getValue(), 'identityv3');
        var endpointDetail = identityURL.concat('/groups/', group.group.id, '/users');
        //console.log(endpointDetail);
        // With CORS Proxy Service in use here
        var authURL = this.utilityService.sendViaCORSProxy(endpointDetail);
        //console.log(authURL);
        // retrieve the K5/OpenStack authentication token from the response header
        var token = this.userProjectToken.getValue().headers.get('x-subject-token');
        //console.log('Getting Users in Group');
        var postheaders = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* Headers */]();
        postheaders.append('Content-Type', 'application/json');
        postheaders.append('Accept', 'application/json');
        postheaders.append('X-Auth-Token', token);
        var postopts = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* RequestOptions */]();
        postopts.headers = postheaders;
        return this.http.get(authURL, postopts)
            .map(function (res) {
            //console.log('New Group User List' + JSON.stringify(res));
            _this.changeUsersInGroup(res.json().users);
            //console.log(this.usersInGroupList.getValue());
            // return res.json().projects as projects;
            // return projects;
        })
            .subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); }, function () { return console.log('Group Roles Complete'); });
    };
    // Get unscoped K5 global token
    IdentityService.prototype.getCentralPortalToken = function (username, password, contract) {
        var _this = this;
        // Without CORS Proxy Service in use
        var identityURL = 'https://auth-api.jp-east-1.paas.cloud.global.fujitsu.com/API/paas/auth/token';
        // With CORS Proxy Service in use here
        var authURL = this.utilityService.sendViaCORSProxy(identityURL);
        var body = { 'auth': { 'identity': { 'password': { 'user': { 'contract_number': contract,
                            'name': username,
                            'password': password
                        } } } } };
        var bodyString = JSON.stringify(body); // Stringify payload
        var postheaders = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* Headers */]();
        postheaders.append('Content-Type', 'application/json');
        postheaders.append('Accept', 'application/json');
        var postopts = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* RequestOptions */]();
        postopts.headers = postheaders;
        return this.http.post(authURL, bodyString, postopts)
            .map(function (gres) {
            _this.changeGlobalToken(gres);
            // this.k5Globalresponse = gres;
            // retrieve the K5/OpenStack authentication token from the response header
            // this.user.globalToken = gres.headers.get('X-Access-Token');
            console.log('Central Portal Token => \n');
            console.log(_this.userGlobalToken.getValue().json());
        });
    };
    // Get unscoped K5 regional token
    IdentityService.prototype.login = function (username, password, contract, region) {
        var _this = this;
        // Without CORS Proxy Service in use
        var identityURL = 'https://identity.'.concat(region, '.cloud.global.fujitsu.com/v3/auth/tokens');
        // With CORS Proxy Service in use here
        var authURL = this.utilityService.sendViaCORSProxy(identityURL);
        var body = { 'auth': { 'identity': { 'methods': ['password'], 'password': { 'user': { 'domain': { 'name': contract },
                            'name': username,
                            'password': password
                        } } } } };
        var bodyString = JSON.stringify(body); // Stringify payload
        var postheaders = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* Headers */]();
        postheaders.append('Content-Type', 'application/json');
        postheaders.append('Accept', 'application/json');
        var postopts = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* RequestOptions */]();
        postopts.headers = postheaders;
        return this.http.post(authURL, bodyString, postopts)
            .map(function (res) {
            _this.changeRegionalToken(res);
            _this.changeLoginStatus(true);
            _this.changeAZList([region + 'a', region + 'b']);
            _this.changeAZ(region + 'b');
            console.log('New AZs');
            console.log(_this.availabilityZoneList.getValue());
            console.log('Default AZone');
            console.log(_this.currentAvailabilityZone.getValue());
            // retrieve Global token
            _this.getCentralPortalToken(username, password, contract).subscribe();
            _this.getKeystoneObjectList('projects').subscribe(function (projects) { return _this.changeContractProjects(projects.json().projects); });
            _this.getKeystoneObjectList('users').subscribe(function (users) { return _this.changeContractUsers(users.json().users); });
            _this.getKeystoneObjectList('roles').subscribe(function (roles) { return _this.changeContractRoles(roles.json().roles); });
            _this.getKeystoneObjectList('groups').subscribe(function (groups) { return _this.changeContractGroups(groups.json().groups); });
            _this.getProjectList().subscribe();
        });
    };
    IdentityService.prototype.logout = function () {
        this.changeLoginStatus(false);
    };
    return IdentityService;
}());
IdentityService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_11__utility_service__["a" /* UtilityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__utility_service__["a" /* UtilityService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_12__compute_service__["a" /* ComputeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12__compute_service__["a" /* ComputeService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__stack_service__["a" /* StackService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__stack_service__["a" /* StackService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__loadbalancer_service__["a" /* LoadbalancerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__loadbalancer_service__["a" /* LoadbalancerService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__network_service__["a" /* NetworkService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__network_service__["a" /* NetworkService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__cloudvisualised_service__["a" /* CloudvisualisedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__cloudvisualised_service__["a" /* CloudvisualisedService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__ipsecvpn_service__["a" /* IpsecvpnService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__ipsecvpn_service__["a" /* IpsecvpnService */]) === "function" && _h || Object])
], IdentityService);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=identity.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/ipsecvpn.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_utility_service__ = __webpack_require__("../../../../../src/app/services/utility.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IpsecvpnService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var IpsecvpnService = (function () {
    function IpsecvpnService(http, utilitiesService) {
        this.http = http;
        this.utilitiesService = utilitiesService;
        this.listIpsecPolicies = new __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.ipsecPolicies = this.listIpsecPolicies.asObservable();
        this.currentIpsecPolicy = new __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.ipsecPolicy = this.currentIpsecPolicy.asObservable();
        this.listIkePolicies = new __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.ikePolicies = this.listIkePolicies.asObservable();
        this.currentIkePolicy = new __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.ikePolicy = this.currentIkePolicy.asObservable();
        this.listVpnServices = new __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.vpnServices = this.listVpnServices.asObservable();
        this.currentVpnService = new __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.vpnService = this.currentVpnService.asObservable();
        this.listIpsecConnections = new __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.ipsecConnections = this.listIpsecConnections.asObservable();
        this.currentIpsecConnection = new __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.ipsecConnection = this.currentIpsecConnection.asObservable();
    }
    IpsecvpnService.prototype.changeIpsecPolicies = function (policies) {
        this.listIpsecPolicies.next(policies);
    };
    IpsecvpnService.prototype.changeIpsecPolicy = function (policy) {
        this.currentIpsecPolicy.next(policy);
    };
    IpsecvpnService.prototype.changeIkePolicies = function (policies) {
        this.listIkePolicies.next(policies);
    };
    IpsecvpnService.prototype.changeIkePolicy = function (policy) {
        this.currentIkePolicy.next(policy);
    };
    IpsecvpnService.prototype.changeVpnServices = function (services) {
        this.listVpnServices.next(services);
    };
    IpsecvpnService.prototype.changeVpnService = function (service) {
        this.currentVpnService.next(service);
    };
    IpsecvpnService.prototype.changeIpsecConnections = function (connections) {
        this.listIpsecConnections.next(connections);
    };
    IpsecvpnService.prototype.changeIpsecConnection = function (connection) {
        this.currentIpsecConnection.next(connection);
    };
    IpsecvpnService.prototype.setRequestHeaders = function (k5token) {
        var requestHeaders = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]();
        requestHeaders.append('Content-Type', 'application/json');
        requestHeaders.append('Accept', 'application/json');
        requestHeaders.append('X-Auth-Token', k5token.headers.get('x-subject-token'));
        var headeropts = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* RequestOptions */]();
        headeropts.headers = requestHeaders;
        return headeropts;
    };
    IpsecvpnService.prototype.ipsecPoliciesList = function (k5token) {
        var _this = this;
        var vpnURL = this.utilitiesService.getEndpoint(k5token, 'networking');
        vpnURL = vpnURL.concat('/v2.0/vpn/ipsecpolicies');
        // With CORS Proxy Service in use here
        var proxiedURL = this.utilitiesService.sendViaCORSProxy(vpnURL);
        var headeropts = this.setRequestHeaders(k5token);
        return this.http.get(proxiedURL, headeropts)
            .map(function (response) {
            response.json();
            console.log('List IPSEC VPNs');
            console.log(response.json());
            _this.changeIpsecPolicies(response.json());
            return response.json();
        })
            .subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); }, function () { return console.log('IPSEC VPN List Success'); });
    };
    IpsecvpnService.prototype.ipsecPolicyShow = function (k5token, policyId) {
        var vpnURL = this.utilitiesService.getEndpoint(k5token, 'networking');
        vpnURL = vpnURL.concat('/v2.0/vpn/ipsecpolicies/', policyId);
        // With CORS Proxy Service in use here
        var proxiedURL = this.utilitiesService.sendViaCORSProxy(vpnURL);
        var headeropts = this.setRequestHeaders(k5token);
        return this.http.get(proxiedURL, headeropts)
            .map(function (response) {
            response.json();
            console.log('IPSEC Policy Show');
            console.log(response.json());
            return response.json();
        })
            .subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); }, function () { return console.log('IPSEC Policy Show Success'); });
    };
    IpsecvpnService.prototype.ipsecPolicyCreate = function (k5token, name, desc, protocol, auth_alg, enc_alg, encapmode, pfsgroup, ipseclt, az) {
        var _this = this;
        var vpnURL = this.utilitiesService.getEndpoint(k5token, 'networking');
        vpnURL = vpnURL.concat('/v2.0/vpn/ipsecpolicies');
        // With CORS Proxy Service in use here
        var proxiedURL = this.utilitiesService.sendViaCORSProxy(vpnURL);
        var headeropts = this.setRequestHeaders(k5token);
        var body = {
            'ipsecpolicy': {
                'name': name,
                'description': desc,
                'transform_protocol': protocol,
                'auth_algorithm': auth_alg,
                'encapsulation_mode': encapmode,
                'encryption_algorithm': enc_alg,
                'pfs': pfsgroup,
                'lifetime': {
                    'units': 'seconds',
                    'value': ipseclt
                },
                'availability_zone': az
            }
        };
        var bodyString = JSON.stringify(body); // Stringify payload
        return this.http.post(proxiedURL, bodyString, headeropts)
            .map(function (response) {
            console.log('IPSEC Policy Creation');
            console.log(response.json());
            _this.ipsecPoliciesList(k5token);
            _this.changeIpsecPolicy(response.json());
            return response.json();
        })
            .subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); }, function () { return console.log('IPSEC Policy Create Success'); });
    };
    IpsecvpnService.prototype.ipsecPolicyUpdate = function (k5token, policyId, name, enc_alg, pfsgroup, ipseclt, description) {
        var _this = this;
        var vpnURL = this.utilitiesService.getEndpoint(k5token, 'networking');
        vpnURL = vpnURL.concat('/v2.0/vpn/ipsecpolicies/', policyId);
        // With CORS Proxy Service in use here
        var proxiedURL = this.utilitiesService.sendViaCORSProxy(vpnURL);
        var headeropts = this.setRequestHeaders(k5token);
        var body = {
            'ipsecpolicy': {
                'name': name,
                'encryption_algorithm': enc_alg,
                'pfs': pfsgroup,
                'lifetime': {
                    'units': 'seconds',
                    'value': ipseclt
                },
                'description': description
            }
        };
        var bodyString = JSON.stringify(body); // Stringify payload
        return this.http.put(proxiedURL, bodyString, headeropts)
            .map(function (response) {
            response.json();
            console.log('IPSEC Policy Update');
            console.log(response.json());
            _this.ipsecPoliciesList(k5token);
            _this.changeIpsecPolicy(response.json());
            return response.json();
        })
            .subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); }, function () { return console.log('IPSEC Policy Update Success'); });
    };
    IpsecvpnService.prototype.ipsecPolicyDelete = function (k5token, policyId) {
        var _this = this;
        var vpnURL = this.utilitiesService.getEndpoint(k5token, 'networking');
        vpnURL = vpnURL.concat('/v2.0/vpn/ipsecpolicies/', policyId);
        // With CORS Proxy Service in use here
        var proxiedURL = this.utilitiesService.sendViaCORSProxy(vpnURL);
        var headeropts = this.setRequestHeaders(k5token);
        return this.http.delete(proxiedURL, headeropts)
            .map(function (response) {
            response.json();
            console.log('IPSEC Delete Policy');
            console.log(response.json());
            _this.ipsecPoliciesList(k5token);
            _this.changeIpsecPolicy(null);
            return response.json();
        })
            .subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); }, function () { return console.log('IPSEC Delete Policy Success'); });
    };
    IpsecvpnService.prototype.ipsecSiteConnectionsList = function (k5token) {
        var _this = this;
        var vpnURL = this.utilitiesService.getEndpoint(k5token, 'networking');
        vpnURL = vpnURL.concat('/v2.0/vpn/ipsec-site-connections');
        // With CORS Proxy Service in use here
        var proxiedURL = this.utilitiesService.sendViaCORSProxy(vpnURL);
        var headeropts = this.setRequestHeaders(k5token);
        return this.http.get(proxiedURL, headeropts)
            .map(function (response) {
            response.json();
            console.log('List IPSEC Site Connections');
            console.log(response.json());
            _this.changeIpsecConnections(response.json());
            return response.json();
        })
            .subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); }, function () { return console.log('IPSEC Site Connections List Success'); });
    };
    IpsecvpnService.prototype.ipsecSiteConnectionShow = function (k5token, connectionId) {
        var vpnURL = this.utilitiesService.getEndpoint(k5token, 'networking');
        vpnURL = vpnURL.concat('/v2.0/vpn/ipsec-site-connections/', connectionId);
        // With CORS Proxy Service in use here
        var proxiedURL = this.utilitiesService.sendViaCORSProxy(vpnURL);
        var headeropts = this.setRequestHeaders(k5token);
        return this.http.get(proxiedURL, headeropts)
            .map(function (response) {
            response.json();
            console.log('IPSEC Site Connection Show');
            console.log(response.json());
            return response.json();
        })
            .subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); }, function () { return console.log('IPSEC Site Connection Show Success'); });
    };
    IpsecvpnService.prototype.ipsecSiteConnectionCreate = function (k5token, name, desc, initiator, vpnsid, ikepid, secpid, peerid, peeradr, peercidr, psk, adminstate, dpdprotocol, dpdinterval, dpdtimeout, az) {
        var _this = this;
        var vpnURL = this.utilitiesService.getEndpoint(k5token, 'networking');
        vpnURL = vpnURL.concat('/v2.0/vpn/ipsec-site-connections');
        // With CORS Proxy Service in use here
        var proxiedURL = this.utilitiesService.sendViaCORSProxy(vpnURL);
        var headeropts = this.setRequestHeaders(k5token);
        var body = {
            'ipsec_site_connection': {
                'psk': psk,
                'initiator': initiator,
                'ipsecpolicy_id': secpid,
                'admin_state_up': adminstate,
                'peer_cidrs': peercidr,
                'ikepolicy_id': ikepid,
                'dpd': {
                    'action': dpdprotocol,
                    'interval': dpdinterval,
                    'timeout': dpdtimeout
                },
                'vpnservice_id': vpnsid,
                'peer_address': peeradr,
                'peer_id': peerid,
                'name': name,
                'description': desc,
                'availability_zone': az
            }
        };
        var bodyString = JSON.stringify(body); // Stringify payload
        return this.http.post(proxiedURL, bodyString, headeropts)
            .map(function (response) {
            console.log('IPSEC Policy Creation');
            console.log(response.json());
            _this.changeIpsecConnection(response.json());
            _this.ipsecSiteConnectionsList(k5token);
            return response.json();
        })
            .subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); }, function () { return console.log('IPSEC Policy Create Success'); });
    };
    IpsecvpnService.prototype.ipsecSiteConnectionUpdate = function (k5token, connectionId, initiator, peerid, peeradr, peercidr, psk, name, desc, adminstate, dpdprotocol, dpdinterval, dpdtimeout) {
        var _this = this;
        var vpnURL = this.utilitiesService.getEndpoint(k5token, 'networking');
        vpnURL = vpnURL.concat('/v2.0/vpn/ipsec-site-connections/', connectionId);
        // With CORS Proxy Service in use here
        var proxiedURL = this.utilitiesService.sendViaCORSProxy(vpnURL);
        var headeropts = this.setRequestHeaders(k5token);
        var body = {
            'ipsec_site_connection': {
                'psk': psk,
                'initiator': initiator,
                'admin_state_up': adminstate,
                'peer_cidrs': peercidr,
                'dpd': {
                    'action': dpdprotocol,
                    'interval': dpdinterval,
                    'timeout': dpdtimeout
                },
                'peer_address': peeradr,
                'peer_id': peerid,
                'name': name,
                'description': desc
            }
        };
        var bodyString = JSON.stringify(body); // Stringify payload
        return this.http.put(proxiedURL, bodyString, headeropts)
            .map(function (response) {
            console.log('IPSEC Policy Creation');
            console.log(response.json());
            _this.changeIpsecConnection(response.json());
            _this.ipsecSiteConnectionsList(k5token);
            return response.json();
        })
            .subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); }, function () { return console.log('IPSEC Policy Create Success'); });
    };
    IpsecvpnService.prototype.ipsecSiteConnectionDelete = function (k5token, connectionId) {
        var _this = this;
        var vpnURL = this.utilitiesService.getEndpoint(k5token, 'networking');
        vpnURL = vpnURL.concat('/v2.0/vpn/ipsec-site-connections/', connectionId);
        // With CORS Proxy Service in use here
        var proxiedURL = this.utilitiesService.sendViaCORSProxy(vpnURL);
        var headeropts = this.setRequestHeaders(k5token);
        return this.http.delete(proxiedURL, headeropts)
            .map(function (response) {
            response.json();
            console.log('IPSEC Site Connection Delete');
            console.log(response.json());
            _this.changeIpsecConnection(null);
            _this.ipsecSiteConnectionsList(k5token);
            return response.json();
        })
            .subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); }, function () { return console.log('IPSEC Site Connection Delete Success'); });
    };
    IpsecvpnService.prototype.vpnServicesList = function (k5token) {
        var _this = this;
        var vpnURL = this.utilitiesService.getEndpoint(k5token, 'networking');
        vpnURL = vpnURL.concat('/v2.0/vpn/vpnservices');
        // With CORS Proxy Service in use here
        var proxiedURL = this.utilitiesService.sendViaCORSProxy(vpnURL);
        var headeropts = this.setRequestHeaders(k5token);
        return this.http.get(proxiedURL, headeropts)
            .map(function (response) {
            response.json();
            console.log('List IPSEC VPN Services');
            console.log(response.json());
            _this.changeVpnServices(response.json());
            return response.json();
        })
            .subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); }, function () { return console.log('IPSEC VPN Services List Success'); });
    };
    IpsecvpnService.prototype.vpnServiceShow = function (k5token, serviceId) {
        var _this = this;
        var vpnURL = this.utilitiesService.getEndpoint(k5token, 'networking');
        vpnURL = vpnURL.concat('/v2.0/vpn/vpnservices/', serviceId);
        // With CORS Proxy Service in use here
        var proxiedURL = this.utilitiesService.sendViaCORSProxy(vpnURL);
        var headeropts = this.setRequestHeaders(k5token);
        return this.http.get(proxiedURL, headeropts)
            .map(function (response) {
            response.json();
            console.log('IPSEC VPN Service Show');
            console.log(response.json());
            _this.changeVpnService(response.json());
            return response.json();
        })
            .subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); }, function () { return console.log('IPSEC VPN Service Show Success'); });
    };
    IpsecvpnService.prototype.vpnServiceCreate = function (k5token, name, desc, routerid, subnetid, az) {
        var _this = this;
        var vpnURL = this.utilitiesService.getEndpoint(k5token, 'networking');
        vpnURL = vpnURL.concat('/v2.0/vpn/vpnservices');
        // With CORS Proxy Service in use here
        var proxiedURL = this.utilitiesService.sendViaCORSProxy(vpnURL);
        var headeropts = this.setRequestHeaders(k5token);
        var body = {
            'vpnservice': {
                'subnet_id': subnetid,
                'router_id': routerid,
                'name': name,
                'description': desc,
                'admin_state_up': true,
                'availability_zone': az
            }
        };
        var bodyString = JSON.stringify(body); // Stringify payload
        return this.http.post(proxiedURL, bodyString, headeropts)
            .map(function (response) {
            console.log('IPSEC VPN Service Creation');
            console.log(response.json());
            _this.vpnServicesList(k5token);
            _this.changeVpnService(response.json());
            return response.json();
        })
            .subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); }, function () { return console.log('IPSEC VPN Service Create Success'); });
    };
    IpsecvpnService.prototype.vpnServiceUpdate = function (k5token, serviceId, name, adminState, desc) {
        var _this = this;
        var vpnURL = this.utilitiesService.getEndpoint(k5token, 'networking');
        vpnURL = vpnURL.concat('/v2.0/vpn/vpnservices/', serviceId);
        // With CORS Proxy Service in use here
        var proxiedURL = this.utilitiesService.sendViaCORSProxy(vpnURL);
        var headeropts = this.setRequestHeaders(k5token);
        var body = {
            'vpnservice': {
                'name': name,
                'admin_state_up': adminState,
                'description': desc
            }
        };
        var bodyString = JSON.stringify(body); // Stringify payload
        return this.http.put(proxiedURL, bodyString, headeropts)
            .map(function (response) {
            console.log('IPSEC VPN Service Update');
            console.log(response.json());
            _this.vpnServicesList(k5token);
            _this.changeVpnService(response.json());
            return response.json();
        })
            .subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); }, function () { return console.log('IPSEC VPN Service Update Success'); });
    };
    IpsecvpnService.prototype.vpnServiceDelete = function (k5token, serviceId) {
        var _this = this;
        var vpnURL = this.utilitiesService.getEndpoint(k5token, 'networking');
        vpnURL = vpnURL.concat('/v2.0/vpn/vpnservices/', serviceId);
        // With CORS Proxy Service in use here
        var proxiedURL = this.utilitiesService.sendViaCORSProxy(vpnURL);
        var headeropts = this.setRequestHeaders(k5token);
        return this.http.delete(proxiedURL, headeropts)
            .map(function (response) {
            response.json();
            console.log('IPSEC VPN Service Deletion');
            console.log(response.json());
            _this.vpnServicesList(k5token);
            _this.changeVpnService(null);
            return response.json();
        })
            .subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); }, function () { return console.log('IPSEC VPN Service Delete Success'); });
    };
    IpsecvpnService.prototype.ikePoliciesList = function (k5token) {
        var _this = this;
        var vpnURL = this.utilitiesService.getEndpoint(k5token, 'networking');
        vpnURL = vpnURL.concat('/v2.0/vpn/ikepolicies');
        // With CORS Proxy Service in use here
        var proxiedURL = this.utilitiesService.sendViaCORSProxy(vpnURL);
        var headeropts = this.setRequestHeaders(k5token);
        return this.http.get(proxiedURL, headeropts)
            .map(function (response) {
            response.json();
            console.log('List IKE Policies');
            console.log(response.json());
            _this.changeIkePolicies(response.json());
            return response.json();
        })
            .subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); }, function () { return console.log('IKE Policies List Success'); });
    };
    IpsecvpnService.prototype.ikePolicyShow = function (k5token, policyId) {
        var _this = this;
        var vpnURL = this.utilitiesService.getEndpoint(k5token, 'networking');
        vpnURL = vpnURL.concat('/v2.0/vpn/ikepolicies/', policyId);
        // With CORS Proxy Service in use here
        var proxiedURL = this.utilitiesService.sendViaCORSProxy(vpnURL);
        var headeropts = this.setRequestHeaders(k5token);
        return this.http.get(proxiedURL, headeropts)
            .map(function (response) {
            response.json();
            console.log('IKE Policy Show');
            console.log(response.json());
            _this.changeIkePolicy(response.json());
            return response.json();
        })
            .subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); }, function () { return console.log('IKE Policy Show Success'); });
    };
    IpsecvpnService.prototype.ikePolicyDelete = function (k5token, policyId) {
        var _this = this;
        var vpnURL = this.utilitiesService.getEndpoint(k5token, 'networking');
        vpnURL = vpnURL.concat('/v2.0/vpn/ikepolicies/', policyId);
        // With CORS Proxy Service in use here
        var proxiedURL = this.utilitiesService.sendViaCORSProxy(vpnURL);
        var headeropts = this.setRequestHeaders(k5token);
        return this.http.delete(proxiedURL, headeropts)
            .map(function (response) {
            response.json();
            console.log('IKE Policy Deletion');
            console.log(response.json());
            _this.ikePoliciesList(k5token);
            _this.changeIkePolicy(null);
            return response.json();
        })
            .subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); }, function () { return console.log('IKE Policy Deletion Success'); });
    };
    IpsecvpnService.prototype.ikePolicyCreate = function (k5token, name, desc, authalg, encryalg, ikelt, ikev, pfs, neg, az) {
        var _this = this;
        var vpnURL = this.utilitiesService.getEndpoint(k5token, 'networking');
        vpnURL = vpnURL.concat('/v2.0/vpn/ikepolicies');
        // With CORS Proxy Service in use here
        var proxiedURL = this.utilitiesService.sendViaCORSProxy(vpnURL);
        var headeropts = this.setRequestHeaders(k5token);
        var body = {
            'ikepolicy': {
                'phase1_negotiation_mode': neg,
                'auth_algorithm': authalg,
                'encryption_algorithm': encryalg,
                'pfs': pfs,
                'lifetime': {
                    'units': 'seconds',
                    'value': ikelt
                },
                'ike_version': ikev,
                'name': name,
                'description': desc,
                'availability_zone': az
            }
        };
        var bodyString = JSON.stringify(body); // Stringify payload
        return this.http.post(proxiedURL, bodyString, headeropts)
            .map(function (response) {
            console.log('IKE Policy Creation');
            console.log(response.json());
            _this.ikePoliciesList(k5token);
            _this.changeIkePolicy(response.json());
            return response.json();
        })
            .subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); }, function () { return console.log('IKE Policy Create Success'); });
    };
    IpsecvpnService.prototype.ikePolicyUpdate = function (k5token, policyId, name, encryalg, ikelt, pfs, desc) {
        var _this = this;
        var vpnURL = this.utilitiesService.getEndpoint(k5token, 'networking');
        vpnURL = vpnURL.concat('/v2.0/vpn/ikepolicies/', policyId);
        // With CORS Proxy Service in use here
        var proxiedURL = this.utilitiesService.sendViaCORSProxy(vpnURL);
        var headeropts = this.setRequestHeaders(k5token);
        var body = {
            'ikepolicy': {
                'encryption_algorithm': encryalg,
                'pfs': pfs,
                'lifetime': {
                    'units': 'seconds',
                    'value': ikelt
                },
                'name': name,
                'description': desc
            }
        };
        var bodyString = JSON.stringify(body); // Stringify payload
        return this.http.put(proxiedURL, bodyString, headeropts)
            .map(function (response) {
            console.log('IKE Policy Update');
            console.log(response.json());
            _this.ikePoliciesList(k5token);
            _this.changeIkePolicy(response.json());
            return response.json();
        })
            .subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); }, function () { return console.log('IKE Policy Update Success'); });
    };
    return IpsecvpnService;
}());
IpsecvpnService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_utility_service__["a" /* UtilityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_utility_service__["a" /* UtilityService */]) === "function" && _b || Object])
], IpsecvpnService);

var _a, _b;
//# sourceMappingURL=ipsecvpn.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/loadbalancer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cloudvisualised_service__ = __webpack_require__("../../../../../src/app/services/cloudvisualised.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_utility_service__ = __webpack_require__("../../../../../src/app/services/utility.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadbalancerService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoadbalancerService = (function () {
    function LoadbalancerService(http, utilitiesService, cloudvisualisedService) {
        this.http = http;
        this.utilitiesService = utilitiesService;
        this.cloudvisualisedService = cloudvisualisedService;
        this.userLBaaSList = new __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.userLBaaS = this.userLBaaSList.asObservable();
        this.userLBaaSDetails = new __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.LBaaSDetails = this.userLBaaSDetails.asObservable();
        this.lBDetails = false;
    }
    LoadbalancerService.prototype.changeLBaaSDetails = function (LBaaSDetails) {
        this.userLBaaSDetails.next(LBaaSDetails);
    };
    LoadbalancerService.prototype.changeLBaaSList = function (userLBaaS) {
        this.userLBaaSList.next(userLBaaS);
        if (userLBaaS != null) {
            this.cloudvisualisedService.getNodes('lbaas', userLBaaS);
        }
    };
    // set LBaaSName to 'all' to retrieve all LBaaS associated with scoped token
    // otherwise provide the name of an existing LBaaS to get it's details
    LoadbalancerService.prototype.getLBaaSDetailOrList = function (k5scopedtoken, LBaaSName) {
        // //console.log('lbaas token');
        // //console.log(k5scopedtoken);
        var _this = this;
        var lbaasURL = this.utilitiesService.getEndpoint(k5scopedtoken, 'loadbalancing');
        if (LBaaSName === 'all') {
            lbaasURL = lbaasURL.concat('/?Version=2014-11-01&Action=DescribeLoadBalancers');
            this.lBDetails = false;
        }
        else {
            //console.log('Get LBAAS Detail rather than ALL')
            lbaasURL = lbaasURL.concat('/?LoadBalancerNames.member.1=', LBaaSName, '&Version=2014-11-01&Action=DescribeLoadBalancers');
            this.lBDetails = true;
        }
        // With CORS Proxy Service in use here
        var proxiedURL = this.utilitiesService.sendViaCORSProxy(lbaasURL);
        var getheaders = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
        getheaders.append('Content-Type', 'application/json');
        getheaders.append('Accept', 'application/json');
        getheaders.append('X-Auth-Token', k5scopedtoken.headers.get('x-subject-token'));
        var headeropts = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]();
        headeropts.headers = getheaders;
        return this.http.get(proxiedURL, headeropts)
            .map(function (res) {
            //console.log('New LBaaS List ->');
            //console.log(res.json().DescribeLoadBalancersResponse.DescribeLoadBalancersResult.LoadBalancerDescriptions.member);
            if (_this.lBDetails) {
                _this.changeLBaaSDetails(res.json().DescribeLoadBalancersResponse.DescribeLoadBalancersResult.LoadBalancerDescriptions.member);
            }
            else {
                _this.changeLBaaSList(res.json().DescribeLoadBalancersResponse.DescribeLoadBalancersResult.LoadBalancerDescriptions.member);
            }
            return res.json().DescribeLoadBalancersResponse.DescribeLoadBalancersResult.LoadBalancerDescriptions.member;
        })
            .subscribe(function (res) { return console.log(res); }, function (err) { return console.log(err); }, function () { return console.log('Finished LBaaS List or Details Observable'); });
    };
    LoadbalancerService.prototype.deleteLBaaS = function (k5scopedtoken, LBaaSName) {
        var lbaasURL = this.utilitiesService.getEndpoint(k5scopedtoken, 'loadbalancing');
        lbaasURL = lbaasURL.concat('/?LoadBalancerName=', LBaaSName, '&Version=2014-11-01&Action=DeleteLoadBalancer');
        // With CORS Proxy Service in use here
        var proxiedURL = this.utilitiesService.sendViaCORSProxy(lbaasURL);
        var getheaders = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
        getheaders.append('Content-Type', 'application/json');
        getheaders.append('Accept', 'application/json');
        getheaders.append('X-Auth-Token', k5scopedtoken.headers.get('x-subject-token'));
        var headeropts = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]();
        headeropts.headers = getheaders;
        return this.http.get(proxiedURL, headeropts)
            .map(function (res) {
            //console.log('LBaaS Deleted');
            //console.log(res.json());
            return res.json();
        })
            .subscribe(function (res) { return console.log(res); }, function (err) { return console.log(err); }, function () { return console.log('Finished LBaaS Deletion'); });
    };
    return LoadbalancerService;
}());
LoadbalancerService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_utility_service__["a" /* UtilityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_utility_service__["a" /* UtilityService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__cloudvisualised_service__["a" /* CloudvisualisedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__cloudvisualised_service__["a" /* CloudvisualisedService */]) === "function" && _c || Object])
], LoadbalancerService);

var _a, _b, _c;
//# sourceMappingURL=loadbalancer.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/network.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cloudvisualised_service__ = __webpack_require__("../../../../../src/app/services/cloudvisualised.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_utility_service__ = __webpack_require__("../../../../../src/app/services/utility.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NetworkService = (function () {
    function NetworkService(http, utilitiesService, cloudvisualisedService) {
        this.http = http;
        this.utilitiesService = utilitiesService;
        this.cloudvisualisedService = cloudvisualisedService;
        this.userRouterList = new __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.userRouters = this.userRouterList.asObservable();
        this.userRouterDetails = new __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.routerDetails = this.userRouterDetails.asObservable();
        this.userNetworkList = new __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.userNetworks = this.userNetworkList.asObservable();
        this.userNetworkDetails = new __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.networkDetails = this.userNetworkDetails.asObservable();
        this.userSubNetworkList = new __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.userSubNetworks = this.userSubNetworkList.asObservable();
        this.userSubNetworkDetails = new __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.subNetworkDetails = this.userSubNetworkDetails.asObservable();
        this.userPortList = new __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.userPorts = this.userPortList.asObservable();
        this.userPortDetails = new __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.subPortDetails = this.userPortDetails.asObservable();
        this.userRouterStatus = new __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.routerStatus = this.userRouterStatus.asObservable();
    }
    NetworkService.prototype.changeRouterList = function (userRouters) {
        this.userRouterList.next(userRouters);
        this.cloudvisualisedService.getNodes('router', userRouters);
    };
    NetworkService.prototype.changeRouterDetails = function (routerDetails) {
        this.userRouterDetails.next(routerDetails);
    };
    NetworkService.prototype.changeRouterStatus = function (routerUpdateStatus) {
        this.userRouterStatus.next(routerUpdateStatus);
    };
    NetworkService.prototype.changeNetworkList = function (userNetworks) {
        this.userNetworkList.next(userNetworks);
        this.cloudvisualisedService.getNodes('network', userNetworks);
    };
    NetworkService.prototype.changeNetworkDetails = function (NetworkDetails) {
        this.userNetworkDetails.next(NetworkDetails);
    };
    NetworkService.prototype.changeSubNetworkList = function (userSubNetworks) {
        this.userSubNetworkList.next(userSubNetworks);
        this.cloudvisualisedService.getNodes('subnetwork', userSubNetworks);
    };
    NetworkService.prototype.changeSubNetworkDetails = function (SubNetworkDetails) {
        this.userSubNetworkDetails.next(SubNetworkDetails);
    };
    NetworkService.prototype.changePortList = function (userPorts) {
        this.userPortList.next(userPorts);
        this.cloudvisualisedService.getNodes('port', userPorts);
    };
    NetworkService.prototype.changePortDetails = function (PortDetails) {
        this.userPortDetails.next(PortDetails);
    };
    NetworkService.prototype.updateRouterRoutes = function (k5scopedtoken, router, newRoutes) {
        var _this = this;
        var networkURL = this.utilitiesService.getEndpoint(k5scopedtoken, 'networking');
        networkURL = networkURL.concat('/v2.0/routers/', router.id);
        // With CORS Proxy Service in use here
        var proxiedURL = this.utilitiesService.sendViaCORSProxy(networkURL);
        newRoutes = JSON.parse(newRoutes);
        // if (!replace) {
        //     console.log('Before route change');
        //     console.log(newRoutes);
        //     console.log('Existing routes');
        //     console.log(router.routes);
        //     console.log(router);
        //     newRoutes.concat(router.routes);
        //     console.log('After route change');
        //     console.log(newRoutes);
        // }
        var body = { 'router': { 'routes': newRoutes } };
        console.log(body);
        var bodyString = JSON.stringify(body); // Stringify payload
        var putheaders = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
        putheaders.append('Content-Type', 'application/json');
        putheaders.append('Accept', 'application/json');
        putheaders.append('X-Auth-Token', k5scopedtoken.headers.get('x-subject-token'));
        var headeropts = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]();
        headeropts.headers = putheaders;
        return this.http.put(proxiedURL, bodyString, headeropts)
            .map(function (res) {
            //console.log('Router details');
            //console.log(res.json().router);
            _this.changeRouterDetails(res.json().router);
            _this.changeRouterStatus(res);
            console.log(res.json().body);
            console.log(res._body);
            return res;
        })
            .subscribe(function (data) { return console.log(data); }, function (err) {
            console.log(err);
            _this.changeRouterStatus(err);
        }, function () { return console.log('Completed Router Update'); });
    };
    NetworkService.prototype.getRouterList = function (k5scopedtoken) {
        var _this = this;
        var networkURL = this.utilitiesService.getEndpoint(k5scopedtoken, 'networking');
        networkURL = networkURL.concat('/v2.0/routers');
        // With CORS Proxy Service in use here
        var proxiedURL = this.utilitiesService.sendViaCORSProxy(networkURL);
        var getheaders = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
        getheaders.append('Content-Type', 'application/json');
        getheaders.append('Accept', 'application/json');
        getheaders.append('X-Auth-Token', k5scopedtoken.headers.get('x-subject-token'));
        var headeropts = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]();
        headeropts.headers = getheaders;
        return this.http.get(proxiedURL, headeropts)
            .map(function (res) {
            //console.log('New Router List ->');
            //console.log(res.json().routers);
            _this.changeRouterList(res.json().routers);
            // return res;
        })
            .subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); }, function () { return console.log('Router list complete'); });
    };
    NetworkService.prototype.getRouterDetails = function (k5scopedtoken, router) {
        var _this = this;
        var networkURL = this.utilitiesService.getEndpoint(k5scopedtoken, 'networking');
        networkURL = networkURL.concat('/v2.0/routers/', router.id);
        // With CORS Proxy Service in use here
        var proxiedURL = this.utilitiesService.sendViaCORSProxy(networkURL);
        var getheaders = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
        getheaders.append('Content-Type', 'application/json');
        getheaders.append('Accept', 'application/json');
        getheaders.append('X-Auth-Token', k5scopedtoken.headers.get('x-subject-token'));
        var headeropts = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]();
        headeropts.headers = getheaders;
        return this.http.get(proxiedURL, headeropts)
            .map(function (res) {
            //console.log('Router details');
            //console.log(res.json().router);
            _this.changeRouterDetails(res.json().router);
            return res;
        })
            .subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); }, function () { return console.log('Completed Router Details'); });
    };
    NetworkService.prototype.getNetworkList = function (k5scopedtoken) {
        var _this = this;
        var networkURL = this.utilitiesService.getEndpoint(k5scopedtoken, 'networking');
        networkURL = networkURL.concat('/v2.0/networks');
        // With CORS Proxy Service in use here
        var proxiedURL = this.utilitiesService.sendViaCORSProxy(networkURL);
        var getheaders = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
        getheaders.append('Content-Type', 'application/json');
        getheaders.append('Accept', 'application/json');
        getheaders.append('X-Auth-Token', k5scopedtoken.headers.get('x-subject-token'));
        var headeropts = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]();
        headeropts.headers = getheaders;
        return this.http.get(proxiedURL, headeropts)
            .map(function (res) {
            //console.log('New network List ->');
            //console.log(res.json().networks);
            _this.changeNetworkList(res.json().networks);
            // return res;
        })
            .subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); }, function () { return console.log('network list complete'); });
    };
    NetworkService.prototype.getNetworkDetails = function (k5scopedtoken, network) {
        var _this = this;
        var networkURL = this.utilitiesService.getEndpoint(k5scopedtoken, 'networking');
        networkURL = networkURL.concat('/v2.0/networks/', network.id);
        // With CORS Proxy Service in use here
        var proxiedURL = this.utilitiesService.sendViaCORSProxy(networkURL);
        var getheaders = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
        getheaders.append('Content-Type', 'application/json');
        getheaders.append('Accept', 'application/json');
        getheaders.append('X-Auth-Token', k5scopedtoken.headers.get('x-subject-token'));
        var headeropts = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]();
        headeropts.headers = getheaders;
        return this.http.get(proxiedURL, headeropts)
            .map(function (res) {
            //console.log('network details');
            //console.log(res.json().network);
            _this.changeNetworkDetails(res.json().network);
            return res;
        })
            .subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); }, function () { return console.log('Completed network Details'); });
    };
    NetworkService.prototype.getSubnetList = function (k5scopedtoken) {
        var _this = this;
        var networkURL = this.utilitiesService.getEndpoint(k5scopedtoken, 'networking');
        networkURL = networkURL.concat('/v2.0/subnets');
        // With CORS Proxy Service in use here
        var proxiedURL = this.utilitiesService.sendViaCORSProxy(networkURL);
        var getheaders = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
        getheaders.append('Content-Type', 'application/json');
        getheaders.append('Accept', 'application/json');
        getheaders.append('X-Auth-Token', k5scopedtoken.headers.get('x-subject-token'));
        var headeropts = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]();
        headeropts.headers = getheaders;
        return this.http.get(proxiedURL, headeropts)
            .map(function (res) {
            //console.log('New Subnet List ->');
            //console.log(res.json().subnets);
            _this.changeSubNetworkList(res.json().subnets);
            // return res;
        })
            .subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); }, function () { return console.log('subnet list complete'); });
    };
    NetworkService.prototype.getSubnetDetails = function (k5scopedtoken, subnet) {
        var _this = this;
        var networkURL = this.utilitiesService.getEndpoint(k5scopedtoken, 'networking');
        networkURL = networkURL.concat('/v2.0/subnets/', subnet.id);
        // With CORS Proxy Service in use here
        var proxiedURL = this.utilitiesService.sendViaCORSProxy(networkURL);
        var getheaders = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
        getheaders.append('Content-Type', 'application/json');
        getheaders.append('Accept', 'application/json');
        getheaders.append('X-Auth-Token', k5scopedtoken.headers.get('x-subject-token'));
        var headeropts = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]();
        headeropts.headers = getheaders;
        return this.http.get(proxiedURL, headeropts)
            .map(function (res) {
            //console.log('Subnet details');
            //console.log(res.json().subnet);
            _this.changeSubNetworkDetails(res.json().subnet);
            return res;
        })
            .subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); }, function () { return console.log('Completed Subnet Details'); });
    };
    NetworkService.prototype.getPortList = function (k5scopedtoken) {
        var _this = this;
        var networkURL = this.utilitiesService.getEndpoint(k5scopedtoken, 'networking');
        networkURL = networkURL.concat('/v2.0/ports');
        // With CORS Proxy Service in use here
        var proxiedURL = this.utilitiesService.sendViaCORSProxy(networkURL);
        var getheaders = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
        getheaders.append('Content-Type', 'application/json');
        getheaders.append('Accept', 'application/json');
        getheaders.append('X-Auth-Token', k5scopedtoken.headers.get('x-subject-token'));
        var headeropts = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]();
        headeropts.headers = getheaders;
        return this.http.get(proxiedURL, headeropts)
            .map(function (res) {
            //console.log('New Port List ->');
            //console.log(res.json().ports);
            _this.changePortList(res.json().ports);
            // return res;
        })
            .subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); }, function () { return console.log('port list complete'); });
    };
    NetworkService.prototype.getPortDetails = function (k5scopedtoken, port) {
        var _this = this;
        var networkURL = this.utilitiesService.getEndpoint(k5scopedtoken, 'networking');
        networkURL = networkURL.concat('/v2.0/ports/', port.id);
        // With CORS Proxy Service in use here
        var proxiedURL = this.utilitiesService.sendViaCORSProxy(networkURL);
        var getheaders = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
        getheaders.append('Content-Type', 'application/json');
        getheaders.append('Accept', 'application/json');
        getheaders.append('X-Auth-Token', k5scopedtoken.headers.get('x-subject-token'));
        var headeropts = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]();
        headeropts.headers = getheaders;
        return this.http.get(proxiedURL, headeropts)
            .map(function (res) {
            //console.log('Port details');
            //console.log(res.json().port);
            _this.changePortDetails(res.json().port);
            return res;
        })
            .subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); }, function () { return console.log('Completed Port Details'); });
    };
    return NetworkService;
}());
NetworkService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_utility_service__["a" /* UtilityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_utility_service__["a" /* UtilityService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__cloudvisualised_service__["a" /* CloudvisualisedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__cloudvisualised_service__["a" /* CloudvisualisedService */]) === "function" && _c || Object])
], NetworkService);

var _a, _b, _c;
//# sourceMappingURL=network.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/password-management.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordManagementService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PasswordManagementService = (function () {
    function PasswordManagementService() {
        this.crypto = window.crypto;
        this.encryptAlgorithm = {
            name: "RSA-OAEP",
            hash: {
                name: "SHA-1"
            }
        };
    }
    // importPublicKey(pemKey) {
    //     //console.log('import pem key');
    //     //console.log(this.convertPemToBinary(pemKey));
    //     return new Promise(function(resolve) {
    //         let importer = crypto.subtle.importKey("spki", this.convertPemToBinary(pemKey), this.encryptAlgorithm, false, ["encrypt"]);
    //         importer.then(function(key) { 
    //         resolve(key);
    //         });
    // });
    // }
    PasswordManagementService.prototype.importKey = function (pemkey) {
        pemkey = this.convertPemToBinary(pemkey);
        window.crypto.subtle.importKey("pkcs8", //can be "jwk" (public or private), "spki" (public only), or "pkcs8" (private only)
        pemkey, {
            name: "RSA-OAEP",
            hash: { name: "SHA-256" },
        }, false, //whether the key is extractable (i.e. can be used in exportKey)
        ["decrypt"] //"encrypt" or "wrapKey" for public key import or
        //"decrypt" or "unwrapKey" for private key imports
        )
            .then(function (publicKey) {
            //returns a publicKey (or privateKey if you are importing a private key)
            //console.log(publicKey);
            return publicKey;
        });
    };
    PasswordManagementService.prototype.convertPemToBinary = function (pem) {
        //console.log('convert pem key');
        //console.log(pem);
        var lines = pem.split('\n');
        var encoded = '';
        for (var i = 0; i < lines.length; i++) {
            if (lines[i].trim().length > 0 &&
                lines[i].indexOf('-BEGIN RSA PRIVATE KEY-') < 0 &&
                lines[i].indexOf('-BEGIN RSA PUBLIC KEY-') < 0 &&
                lines[i].indexOf('-BEGIN PUBLIC KEY-') < 0 &&
                lines[i].indexOf('-END PUBLIC KEY-') < 0 &&
                lines[i].indexOf('-END RSA PRIVATE KEY-') < 0 &&
                lines[i].indexOf('-END RSA PUBLIC KEY-') < 0) {
                encoded += lines[i].trim();
            }
        }
        //console.log('converted pem key');
        //console.log(encoded);
        //console.log(this.base64StringToArrayBuffer(encoded));
        return this.base64StringToArrayBuffer(encoded);
    };
    PasswordManagementService.prototype.base64StringToArrayBuffer = function (b64str) {
        var byteStr = atob(b64str);
        var bytes = new Uint8Array(byteStr.length);
        for (var i = 0; i < byteStr.length; i++) {
            bytes[i] = byteStr.charCodeAt(i);
        }
        return bytes.buffer;
    };
    PasswordManagementService.prototype.arrayBufferToBase64String = function (arrayBuffer) {
        var byteArray = new Uint8Array(arrayBuffer);
        var byteString = '';
        for (var i = 0; i < byteArray.byteLength; i++) {
            byteString += String.fromCharCode(byteArray[i]);
        }
        return btoa(byteString);
    };
    PasswordManagementService.prototype.decrypt_data = function (private_key_object, encrypted_data) {
        //console.log(' decrypt key debug....');
        //console.log(private_key_object);
        private_key_object = this.importKey(private_key_object);
        //console.log(private_key_object);
        //console.log(encrypted_data);
        encrypted_data = this.base64StringToArrayBuffer(encrypted_data);
        //console.log(encrypted_data);
        window.crypto.subtle.decrypt({
            name: "RSA-OAEP",
        }, private_key_object, //from generateKey or importKey above
        encrypted_data //ArrayBuffer of the data
        )
            .then(function (decrypted) {
            //returns an ArrayBuffer containing the decrypted data
            //console.log(new Uint8Array(decrypted));
        });
    };
    return PasswordManagementService;
}());
PasswordManagementService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], PasswordManagementService);

//# sourceMappingURL=password-management.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/remove-quotes.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoveQuotesPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RemoveQuotesPipe = (function () {
    function RemoveQuotesPipe() {
    }
    RemoveQuotesPipe.prototype.transform = function (value, args) {
        if (value.indexOf('"') > -1) {
            return value.replace(/"/g, '');
        }
        else {
            return value;
        }
    };
    return RemoveQuotesPipe;
}());
RemoveQuotesPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({
        name: 'removeQuotes'
    })
], RemoveQuotesPipe);

//# sourceMappingURL=remove-quotes.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/services/sort-objects-by-name.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortObjectsByNamePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SortObjectsByNamePipe = (function () {
    function SortObjectsByNamePipe() {
    }
    SortObjectsByNamePipe.prototype.transform = function (arr, args) {
        if (!arr) {
            return;
        }
        return arr.sort(function (a, b) {
            if ((a.name).toLowerCase() > (b.name).toLowerCase()) {
                return 1;
            }
            if ((a.name).toLowerCase() < (b.name).toLowerCase()) {
                return -1;
            }
            return 0;
        });
    };
    return SortObjectsByNamePipe;
}());
SortObjectsByNamePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({
        name: 'sortObjectsByName'
    })
], SortObjectsByNamePipe);

//# sourceMappingURL=sort-objects-by-name.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/services/stack-sorter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StackSorterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var StackSorterPipe = (function () {
    function StackSorterPipe() {
    }
    StackSorterPipe.prototype.transform = function (arr, args) {
        if (!arr) {
            return;
        }
        return arr.sort(function (a, b) {
            if ((a.stack_name).toLowerCase() > (b.stack_name).toLowerCase()) {
                return 1;
            }
            if ((a.stack_name).toLowerCase() < (b.stack_name).toLowerCase()) {
                return -1;
            }
            return 0;
        });
    };
    return StackSorterPipe;
}());
StackSorterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({
        name: 'stackSorter'
    })
], StackSorterPipe);

//# sourceMappingURL=stack-sorter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/services/stack.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_utility_service__ = __webpack_require__("../../../../../src/app/services/utility.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StackService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var StackService = (function () {
    function StackService(http, utilitiesService) {
        this.http = http;
        this.utilitiesService = utilitiesService;
        this.userStackList = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.userStacks = this.userStackList.asObservable();
        this.userStackDetails = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.stackDetails = this.userStackDetails.asObservable();
        this.userStackOutputs = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.stackOutputs = this.userStackOutputs.asObservable();
        this.currentProject = null;
        this.currentProjectToken = null;
    }
    StackService.prototype.changeStackList = function (userStacks) {
        this.userStackList.next(userStacks);
    };
    StackService.prototype.changeStackOutputs = function (stackOutputs) {
        this.userStackOutputs.next(stackOutputs);
    };
    StackService.prototype.changeStackDetails = function (stackDetails) {
        this.userStackDetails.next(stackDetails);
    };
    StackService.prototype.getStackList = function (k5scopedtoken) {
        var _this = this;
        var stackURL = this.utilitiesService.getEndpoint(k5scopedtoken, 'orchestration');
        stackURL = stackURL.concat('/stacks');
        // With CORS Proxy Service in use here
        var proxiedURL = this.utilitiesService.sendViaCORSProxy(stackURL);
        var getheaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        getheaders.append('Content-Type', 'application/json');
        getheaders.append('Accept', 'application/json');
        getheaders.append('X-Auth-Token', k5scopedtoken.headers.get('x-subject-token'));
        var headeropts = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
        headeropts.headers = getheaders;
        return this.http.get(proxiedURL, headeropts)
            .map(function (res) {
            //console.log('New Stack List ->');
            //console.log(res.json().stacks);
            _this.changeStackList(res.json().stacks);
            // return res;
        })
            .subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); }, function () { return console.log('yay'); });
    };
    StackService.prototype.getStackDetails = function (k5scopedtoken, stack) {
        var _this = this;
        var stackURL = this.utilitiesService.getEndpoint(k5scopedtoken, 'orchestration');
        stackURL = stackURL.concat('/stacks/', stack.stack_name, '/', stack.id);
        // With CORS Proxy Service in use here
        var proxiedURL = this.utilitiesService.sendViaCORSProxy(stackURL);
        var getheaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        getheaders.append('Content-Type', 'application/json');
        getheaders.append('Accept', 'application/json');
        getheaders.append('X-Auth-Token', k5scopedtoken.headers.get('x-subject-token'));
        var headeropts = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
        headeropts.headers = getheaders;
        return this.http.get(proxiedURL, headeropts)
            .map(function (res) {
            //console.log('Heat Stack Details');
            //console.log(res.json());
            _this.changeStackDetails(res.json());
            // added following 'hack' as the outputs API call is not currently implemented on FJ K5 IaaS
            _this.changeStackOutputs(res.json().stack.outputs);
            // return res;
        })
            .subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); }, function () { return console.log('yay'); });
    };
    StackService.prototype.deleteStack = function (k5scopedtoken, stack) {
        var _this = this;
        var stackURL = this.utilitiesService.getEndpoint(k5scopedtoken, 'orchestration');
        stackURL = stackURL.concat('/stacks/', stack.stack.stack_name, '/', stack.stack.id);
        // With CORS Proxy Service in use here
        var proxiedURL = this.utilitiesService.sendViaCORSProxy(stackURL);
        var getheaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        getheaders.append('Content-Type', 'application/json');
        getheaders.append('Accept', 'application/json');
        getheaders.append('X-Auth-Token', k5scopedtoken.headers.get('x-subject-token'));
        var headeropts = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
        headeropts.headers = getheaders;
        return this.http.delete(proxiedURL, headeropts)
            .map(function (res) {
            //console.log('Delete Stack');
            //console.log(res.json());
            _this.changeStackDetails(null);
            // added following 'hack' as the outputs API call is not currently implemented on FJ K5 IaaS
            _this.changeStackOutputs(null);
            return res;
        })
            .subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); }, function () { return console.log('yay'); });
    };
    // API not currently implemented on Fujitsu K5 IaaS 12/09/2017 - Graham Land
    // Just grab the outputs from the server details
    StackService.prototype.getStackOutputs = function (k5scopedtoken, stack) {
        var _this = this;
        var stackURL = this.utilitiesService.getEndpoint(k5scopedtoken, 'orchestration');
        stackURL = stackURL.concat('/stacks/', stack.stack_name, '/', stack.id, '/outputs');
        // With CORS Proxy Service in use here
        var proxiedURL = this.utilitiesService.sendViaCORSProxy(stackURL);
        var getheaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        getheaders.append('Content-Type', 'application/json');
        getheaders.append('Accept', 'application/json');
        getheaders.append('X-Auth-Token', k5scopedtoken.headers.get('x-subject-token'));
        var headeropts = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
        headeropts.headers = getheaders;
        return this.http.get(proxiedURL, headeropts)
            .map(function (res) {
            //console.log('Heat Stack Outputs');
            //console.log(res.json().outputs);
            _this.changeStackOutputs(res.json().outputs);
            // return res;
        })
            .subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); }, function () { return console.log('yay'); });
    };
    return StackService;
}());
StackService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_utility_service__["a" /* UtilityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_utility_service__["a" /* UtilityService */]) === "function" && _b || Object])
], StackService);

var _a, _b;
//# sourceMappingURL=stack.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/user-maintenance.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_utility_service__ = __webpack_require__("../../../../../src/app/services/utility.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserMaintenanceService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserMaintenanceService = (function () {
    function UserMaintenanceService(http, utilitiesService) {
        this.http = http;
        this.utilitiesService = utilitiesService;
    }
    // undocumented api - just a guess
    // listUserfromCentralPortal(k5GlobalToken: any, user: any) {
    //   let centralIdUrl = 'https://k5-apiportal.paas.cloud.global.fujitsu.com/API/v1/api/users?login_id=';
    //   centralIdUrl = centralIdUrl.concat(user.name);
    //   // With CORS Proxy Service in use here
    //   const authURL = this.utilitiesService.sendViaCORSProxy(centralIdUrl);
    //   const postheaders: Headers = new Headers();
    //   postheaders.append('Content-Type', 'application/json');
    //   postheaders.append('Accept', 'application/json');
    //   postheaders.append('Token', k5GlobalToken.headers.get('X-Access-Token'));
    //   const postopts: RequestOptions = new RequestOptions();
    //   postopts.headers = postheaders;
    //   //console.log('call Update API ===>' + user.id + ' token : ' + user.globalToken);
    //   return this.http.get(authURL, postopts)
    //       .map(res => res.json())
    //       .subscribe((data) => { //console.log('Get Response ' + data);
    //                   },
    //                   (err) => { //console.log('Get Error ' + err);
    //                   });
    // }
    UserMaintenanceService.prototype.listUserfromCentralPortal = function (k5GlobalToken, user) {
        var centralIdUrl = 'https://k5-apiportal.paas.cloud.global.fujitsu.com/API/v1/api/users?login_id=';
        centralIdUrl = centralIdUrl.concat(user.name);
        // With CORS Proxy Service in use here
        var authURL = this.utilitiesService.sendViaCORSProxy(centralIdUrl);
        var body = { 'language_code': 'en' };
        var bodyString = JSON.stringify(body); // Stringify payload
        var postheaders = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
        postheaders.append('Content-Type', 'application/json');
        postheaders.append('Accept', 'application/json');
        postheaders.append('Token', k5GlobalToken.headers.get('X-Access-Token'));
        var postopts = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]();
        postopts.headers = postheaders;
        return this.http.put(authURL, bodyString, postopts)
            .map(function (res) {
            //console.log('Response of User Update');
            //console.log(res);
            //console.log('User Queried on Central Portal' + JSON.stringify(res) );
        });
    };
    return UserMaintenanceService;
}());
UserMaintenanceService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_utility_service__["a" /* UtilityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_utility_service__["a" /* UtilityService */]) === "function" && _b || Object])
], UserMaintenanceService);

var _a, _b;
//# sourceMappingURL=user-maintenance.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/utility.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilityService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UtilityService = (function () {
    function UtilityService() {
        this.userk5CORSproxy = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](true);
        this.userK5CORS = this.userk5CORSproxy.asObservable();
    }
    UtilityService.prototype.changek5proxy = function (proxy) {
        //console.log(this.userk5CORSproxy.getValue());
        this.userk5CORSproxy.next(!proxy);
        //console.log(this.userk5CORSproxy.getValue());
    };
    UtilityService.prototype.convertStringToArrayBufferView = function (str) {
        var bytes = new Uint8Array(str.length);
        for (var iii = 0; iii < str.length; iii++) {
            bytes[iii] = str.charCodeAt(iii);
        }
        return bytes;
    };
    UtilityService.prototype.convertArrayBufferViewtoString = function (buffer) {
        var str = "";
        for (var iii = 0; iii < buffer.byteLength; iii++) {
            str += String.fromCharCode(buffer[iii]);
        }
        return str;
    };
    // Generate random password
    UtilityService.prototype.generateRandomPassword = function (passwordLength) {
        var text = '';
        var possible = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        for (var i = 0; i < passwordLength; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    };
    UtilityService.prototype.getEndpoint = function (k5token, endpointType) {
        // //console.log('Get Endpoint Token Details ' + JSON.stringify(k5token));
        // //console.log('Get Endpoint ObjectType Details ' + endpointType);
        for (var _i = 0, _a = (k5token.json().token.catalog); _i < _a.length; _i++) {
            var endpoint = _a[_i];
            if (endpoint.endpoints.length > 0) {
                if (endpointType === endpoint.endpoints[0].name) {
                    // //console.log(endpoint.endpoints[0].url);
                    return endpoint.endpoints[0].url;
                }
            }
        }
    };
    UtilityService.prototype.getItemId = function (itemList, itemName, itemType) {
        var itemId = 'None';
        for (var item in itemList.json()[itemType]) {
            if (itemList.json()[itemType][item].name === itemName) {
                // //console.log('\n\n\n\===== OBJECT  LIST ======\n\n\n' + JSON.stringify(itemList.json()[itemType][item]));
                itemId = itemList.json()[itemType][item].id;
                break;
            }
        }
        return itemId;
    };
    UtilityService.prototype.getItemName = function (itemList, itemID) {
        var itemName = 'None';
        for (var item in itemList.json()) {
            if (itemList.json()[item].id === itemID) {
                //console.log('\n\n\n\===== OBJECT  LIST ======\n\n\n' + JSON.stringify(itemList.json()));
                itemName = itemList.json()[item].name;
                break;
            }
        }
        return itemName;
    };
    UtilityService.prototype.sendViaCORSProxy = function (URL) {
        // //console.log(URL);
        if (this.userk5CORSproxy.getValue()) {
            // CORS PROXY URL
            //const corsProxy = 'http://localhost:2337/';https://corsproxy.uk-1.cf-app.net/
            var corsProxy = 'https://corsproxy.uk-1.cf-app.net/';
            // const corsProxy = 'https://hydra-t-apimng.uk-1.paas.cloud.global.fujitsu.com:10443/k5corsdemo/'
            // remove the first 8 characters of the URL...https:// and add export
            var protocol = URL.split(':', 1);
            var port = (protocol[0] === 'https') ? 443 : 80;
            // insert port number after host details
            var pureURL = URL.substring((protocol[0].length + 3), URL.length);
            // //console.log(pureURL);
            var hostName = pureURL.split('/', 1);
            var urlWithoutHost = pureURL.substring(hostName[0].length, pureURL.length);
            // //console.log(urlWithoutHost);
            var hostNamePort = hostName[0].concat(':', port.toString());
            var proxyURL = corsProxy.concat(hostNamePort, urlWithoutHost);
            // //console.log(proxyURL);
            return proxyURL;
        }
        else {
            return URL;
        }
    };
    return UtilityService;
}());
UtilityService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], UtilityService);

//# sourceMappingURL=utility.service.js.map

/***/ }),

/***/ "../../../../../src/app/user-management.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-management.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  user-management works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/user-management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserManagementComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserManagementComponent = (function () {
    function UserManagementComponent() {
    }
    UserManagementComponent.prototype.ngOnInit = function () {
    };
    return UserManagementComponent;
}());
UserManagementComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-user-management',
        template: __webpack_require__("../../../../../src/app/user-management.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user-management.component.css")]
    }),
    __metadata("design:paramtypes", [])
], UserManagementComponent);

//# sourceMappingURL=user-management.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map