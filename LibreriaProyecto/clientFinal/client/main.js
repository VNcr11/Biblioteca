(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\libreria\LibreriaProyectofaltaDiseño\LibreriaProyecto\client\src\main.ts */"zUnb");


/***/ }),

/***/ "3+2w":
/*!*****************************************************************!*\
  !*** ./src/app/components/libros-list/libros-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: LibrosListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibrosListComponent", function() { return LibrosListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_libros_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/libros.service */ "ECvv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




const _c0 = function (a1) { return ["/libro/edit", a1]; };
function LibrosListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LibrosListComponent_div_0_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const libro_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.deleteLibros(libro_r1.clave); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " MODIFICAR LIBRO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const libro_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", libro_r1.nombre, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", libro_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](libro_r1.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Autor : ", libro_r1.autor, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Edicion : ", libro_r1.edicion, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, libro_r1.clave));
} }
class LibrosListComponent {
    constructor(librosService) {
        this.librosService = librosService;
        this.classes = 'row';
        this.libros = [];
    }
    ngOnInit() {
        this.getLibros();
    }
    getLibros() {
        this.librosService.getLibros().subscribe(res => {
            this.libros = res;
        }, err => console.error(err));
    }
    deleteLibros(clave) {
        this.librosService.deleteLibros(clave).subscribe(res => {
            console.log(res);
            this.getLibros();
        }, err => console.log(err));
    }
}
LibrosListComponent.ɵfac = function LibrosListComponent_Factory(t) { return new (t || LibrosListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_libros_service__WEBPACK_IMPORTED_MODULE_1__["LibrosService"])); };
LibrosListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LibrosListComponent, selectors: [["app-libros-list"]], hostVars: 2, hostBindings: function LibrosListComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.classes);
    } }, decls: 2, vars: 1, consts: [["class", "col-md-4", 4, "ngFor", "ngForOf"], [1, "abajo"], [1, "col-md-4"], [1, "card", "text-center"], [1, "card-header", "bg-dark", "text-white", "d-flex", "justify-content-between", "align-items-center"], [1, "btn", "btn-danger", 3, "click"], [1, "far", "fa-trash-alt"], [1, "car-body"], [1, "card-img-top", 3, "src"], [1, "texto1"], [1, "btn", "btn-info", "btn-block", 3, "routerLink"]], template: function LibrosListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LibrosListComponent_div_0_Template, 18, 8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.libros);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["body[_ngcontent-%COMP%]{\r\n    margin:0;\r\n    padding:0;\r\n    background: linear-gradient(120deg,#1b4c6d,#640e64);\r\n    \r\n    height: 100vh;\r\n    overflow: hidden;\r\n    line-height: 1;\r\n    }\r\nbutton[_ngcontent-%COMP%]{\r\n    border: 1px solid;\r\n    background:#053503 ;\r\n    border: none;\r\n    font-size: 18px;\r\n    color: white;\r\n    background-color: rgb(220, 100, 9);\r\n    border-radius: 4px;\r\n    box-shadow: inset 0 0 0 0 #a1b6c4;\r\n    transition: ease-out 0.3s;\r\n    outline: none;\r\n\r\n}\r\n.btn[_ngcontent-%COMP%]{\r\n    padding: 0.75rem 0.5rem;\r\n}\r\nbutton[_ngcontent-%COMP%]:hover{\r\n    box-shadow: inset 300p 5 0 0 #064a77;\r\n}\r\n.col-md4[_ngcontent-%COMP%]{\r\n    border: 1px solid;\r\n    background:#095f30 ;\r\n}\r\n.col-md4[_ngcontent-%COMP%]:hover{\r\n    border: 20px solid;\r\n    background-color: violet;\r\n}\r\n.card-img-top[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    align-items: center;\r\n    width: 110px;\r\n    height:180px ;\r\n}\r\n.btn.btn-info[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    background-color: #1fcf6a;\r\n    border-color: #1f9bcf;\r\n}\r\n.row[_ngcontent-%COMP%]{\r\n    margin-bottom: 400px;\r\n    margin-top: 150px;\r\n    margin-left: 50px;\r\n}\r\n.texto1[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    border: 10px;\r\n    border-radius: 5px;\r\n    border-color: black;\r\n    background-color: grey;\r\n    color: black;\r\n    margin-top: 0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnJvcy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxRQUFRO0lBQ1IsU0FBUztJQUNULG1EQUFtRDs7SUFFbkQsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2Q7QUFDSjtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGVBQWU7SUFDZixZQUFZO0lBQ1osa0NBQWtDO0lBQ2xDLGtCQUFrQjtJQUNsQixpQ0FBaUM7SUFDakMseUJBQXlCO0lBQ3pCLGFBQWE7O0FBRWpCO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLG9DQUFvQztBQUN4QztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtBQUNqQjtBQUNBO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtJQUN6QixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixlQUFlO0FBQ25CIiwiZmlsZSI6ImxpYnJvcy1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xyXG4gICAgbWFyZ2luOjA7XHJcbiAgICBwYWRkaW5nOjA7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTIwZGVnLCMxYjRjNmQsIzY0MGU2NCk7XHJcbiAgICBcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICB9XHJcbmJ1dHRvbntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgYmFja2dyb3VuZDojMDUzNTAzIDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjAsIDEwMCwgOSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAwICNhMWI2YzQ7XHJcbiAgICB0cmFuc2l0aW9uOiBlYXNlLW91dCAwLjNzO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuXHJcbn1cclxuLmJ0bntcclxuICAgIHBhZGRpbmc6IDAuNzVyZW0gMC41cmVtO1xyXG59XHJcbmJ1dHRvbjpob3ZlcntcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDMwMHAgNSAwIDAgIzA2NGE3NztcclxufVxyXG4uY29sLW1kNHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgYmFja2dyb3VuZDojMDk1ZjMwIDtcclxufVxyXG4uY29sLW1kNDpob3ZlcntcclxuICAgIGJvcmRlcjogMjBweCBzb2xpZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZpb2xldDtcclxufVxyXG4uY2FyZC1pbWctdG9we1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMTBweDtcclxuICAgIGhlaWdodDoxODBweCA7XHJcbn1cclxuLmJ0bi5idG4taW5mbyB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZmNmNmE7XHJcbiAgICBib3JkZXItY29sb3I6ICMxZjliY2Y7XHJcbn1cclxuLnJvd3tcclxuICAgIG1hcmdpbi1ib3R0b206IDQwMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcclxufVxyXG4udGV4dG8xe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "ECvv":
/*!********************************************!*\
  !*** ./src/app/services/libros.service.ts ***!
  \********************************************/
/*! exports provided: LibrosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibrosService", function() { return LibrosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class LibrosService {
    constructor(http) {
        this.http = http;
        this.API_URI = 'http://3.15.150.101:3001/api';
    }
    getCategorias2() {
        return this.http.get(`${this.API_URI}/categoria`);
    }
    getLibros() {
        return this.http.get(`${this.API_URI}/libros`);
    }
    getLibro(clave) {
        return this.http.get(`${this.API_URI}/libros/${clave}`);
    }
    deleteLibros(clave) {
        return this.http.delete(`${this.API_URI}/libros/${clave}`);
    }
    saveLibro(libro) {
        return this.http.post(`${this.API_URI}/libros`, libro);
    }
    updateLibro(clave, updatedLibro) {
        return this.http.put(`${this.API_URI}/libros/${clave}`, updatedLibro);
    }
}
LibrosService.ɵfac = function LibrosService_Factory(t) { return new (t || LibrosService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
LibrosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LibrosService, factory: LibrosService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "IgQh":
/*!***************************************************************!*\
  !*** ./src/app/components/inicio-pag/inicio-pag.component.ts ***!
  \***************************************************************/
/*! exports provided: InicioPagComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioPagComponent", function() { return InicioPagComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class InicioPagComponent {
    constructor() { }
    ngOnInit() {
    }
}
InicioPagComponent.ɵfac = function InicioPagComponent_Factory(t) { return new (t || InicioPagComponent)(); };
InicioPagComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InicioPagComponent, selectors: [["app-inicio-pag"]], decls: 2, vars: 0, template: function InicioPagComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "inicio-pag works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmljaW8tcGFnLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navigation/navigation.component */ "mvyS");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'client';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "container", "p-4"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
    } }, directives: [_components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__["NavigationComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "X4ga":
/*!*************************************************************************!*\
  !*** ./src/app/components/categorias-form/categorias-form.component.ts ***!
  \*************************************************************************/
/*! exports provided: CategoriasFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriasFormComponent", function() { return CategoriasFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_categorias_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/categorias.service */ "Xnfx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class CategoriasFormComponent {
    constructor(categoriasService, router, activedRoute) {
        this.categoriasService = categoriasService;
        this.router = router;
        this.activedRoute = activedRoute;
        this.classes = 'row';
        this.categoria = {
            idCategoria: 0,
            nombreCategoria: '',
            cantidadLibros: 0,
            editorial: '',
            fechaIngreso: new Date()
        };
        this.edit = false;
    }
    ngOnInit() {
        const params = this.activedRoute.snapshot.params;
        //console.log(params);
        if (params.idCategorias) {
            console.log(params);
            console.log('funciona');
            this.categoriasService.getCategoria(params.idCategorias)
                .subscribe(res => {
                console.log(res);
                this.categoria = res;
                this.edit = true;
            }, err => console.error(err));
        }
    }
    saveNewCategoria() {
        //delete this.categoria.fechaIngreso;
        delete this.categoria.idCategoria;
        this.categoriasService.saveCategoria(this.categoria)
            .subscribe(res => {
            console.log(res);
            this.router.navigate(['/categoria']);
        }, err => console.error(err));
    }
    updateCategorias() {
        //delete this.categoria.fechaIngreso;
        this.categoriasService.updateCategoria(String(this.categoria.idCategoria), this.categoria)
            .subscribe(res => {
            console.log(res);
            this.router.navigate(['/categoria']);
        }, err => console.log(err));
    }
}
CategoriasFormComponent.ɵfac = function CategoriasFormComponent_Factory(t) { return new (t || CategoriasFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_categorias_service__WEBPACK_IMPORTED_MODULE_1__["CategoriasService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
CategoriasFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CategoriasFormComponent, selectors: [["app-categorias-form"]], hostVars: 2, hostBindings: function CategoriasFormComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.classes);
    } }, decls: 22, vars: 8, consts: [[1, "col-md-4", "offset-md-4"], [1, "card"], [1, "card-body"], [1, "form-group"], ["type", "text", "name", "nombreCategoria", "placeholder", "ingresa la Categoria", "autofocus", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "cantidadLibros", "placeholder", "CantidadLibros", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "date", "name", "fechaIngreso", "placeholder", "ingresa la fecha", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "editorial", "placeholder", "Editorial", "rows", "2", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-success", "btn-block", 3, "click"], [1, "col-md-2"], [1, "card", "card-body", "text-center"]], template: function CategoriasFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CategoriasFormComponent_Template_input_ngModelChange_5_listener($event) { return ctx.categoria.nombreCategoria = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CategoriasFormComponent_Template_input_ngModelChange_7_listener($event) { return ctx.categoria.cantidadLibros = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CategoriasFormComponent_Template_input_ngModelChange_9_listener($event) { return ctx.categoria.fechaIngreso = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "textarea", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CategoriasFormComponent_Template_textarea_ngModelChange_11_listener($event) { return ctx.categoria.editorial = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoriasFormComponent_Template_button_click_12_listener() { return ctx.edit ? ctx.updateCategorias() : ctx.saveNewCategoria(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Guardar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.categoria.nombreCategoria);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.categoria.cantidadLibros);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.categoria.fechaIngreso);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.categoria.editorial);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.categoria.idCategoria, ", ", ctx.categoria.nombreCategoria == "" ? "Titulo de Categoria" : ctx.categoria.nombreCategoria, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.categoria.editorial == "" ? "Escribe la editorial" : ctx.categoria.editorial);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.categoria.cantidadLibros == 0 ? "Escribe la cantidad" : ctx.categoria.cantidadLibros);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yaWFzLWZvcm0uY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "Xnfx":
/*!************************************************!*\
  !*** ./src/app/services/categorias.service.ts ***!
  \************************************************/
/*! exports provided: CategoriasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriasService", function() { return CategoriasService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class CategoriasService {
    constructor(http) {
        this.http = http;
        this.API_URI = 'http://3.15.150.101:3001/api';
    }
    getCategorias() {
        return this.http.get(`${this.API_URI}/categoria`);
    }
    getCategoria(idCategoria) {
        return this.http.get(`${this.API_URI}/categoria/${idCategoria}`);
    }
    deleteCategoria(idCategoria) {
        return this.http.delete(`${this.API_URI}/categoria/${idCategoria}`);
    }
    saveCategoria(categoria) {
        return this.http.post(`${this.API_URI}/categoria`, categoria);
    }
    updateCategoria(idCategoria, updatedCategoria) {
        return this.http.put(`${this.API_URI}/categoria/${idCategoria}`, updatedCategoria);
    }
}
CategoriasService.ɵfac = function CategoriasService_Factory(t) { return new (t || CategoriasService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CategoriasService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CategoriasService, factory: CategoriasService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/navigation/navigation.component */ "mvyS");
/* harmony import */ var _components_categorias_form_categorias_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/categorias-form/categorias-form.component */ "X4ga");
/* harmony import */ var _components_categorias_list_categorias_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/categorias-list/categorias-list.component */ "xdXY");
/* harmony import */ var _services_categorias_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/categorias.service */ "Xnfx");
/* harmony import */ var _components_libros_form_libros_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/libros-form/libros-form.component */ "pbC3");
/* harmony import */ var _components_libros_list_libros_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/libros-list/libros-list.component */ "3+2w");
/* harmony import */ var _components_inicio_pag_inicio_pag_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/inicio-pag/inicio-pag.component */ "IgQh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");













class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ providers: [
        _services_categorias_service__WEBPACK_IMPORTED_MODULE_8__["CategoriasService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__["NavigationComponent"],
        _components_categorias_form_categorias_form_component__WEBPACK_IMPORTED_MODULE_6__["CategoriasFormComponent"],
        _components_categorias_list_categorias_list_component__WEBPACK_IMPORTED_MODULE_7__["CategoriasListComponent"],
        _components_libros_form_libros_form_component__WEBPACK_IMPORTED_MODULE_9__["LibrosFormComponent"],
        _components_libros_list_libros_list_component__WEBPACK_IMPORTED_MODULE_10__["LibrosListComponent"],
        _components_inicio_pag_inicio_pag_component__WEBPACK_IMPORTED_MODULE_11__["InicioPagComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]] }); })();


/***/ }),

/***/ "mvyS":
/*!***************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.ts ***!
  \***************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class NavigationComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavigationComponent.ɵfac = function NavigationComponent_Factory(t) { return new (t || NavigationComponent)(); };
NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavigationComponent, selectors: [["app-navigation"]], decls: 20, vars: 0, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", 2, "background-color", "e3f2fd"], [1, "container"], ["routerLink", "/", 1, "navbar-brand"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarNav", "aria-controls", "navbarNav", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["idCategoria", "navbarNav", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], [1, "nav-item"], ["routerLink", "/libro/add", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/libro/", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/categoria", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/categoria/add", "routerLinkActive", "active", 1, "nav-link"]], template: function NavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Libreria");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Agregar Libro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Ver lista de libros");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Lista de Categorias");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Agregar Categoria");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: [".navbar[_ngcontent-%COMP%]{\r\n    background: linear-gradient(120deg,#076a83,#44c082);\r\n}\r\n.nav-item[_ngcontent-%COMP%]{\r\n    background: transparent;\r\n    padding: 0 40px;\r\n    box-sizing: border-box;\r\n    border-radius: 4px;\r\n    border: rgb(15, 179, 10);\r\n    box-shadow: inset 0 0 0 0 #1b4c6d;\r\n    transition: ease-out 0.3s;\r\n    \r\n}\r\n.nav-item[_ngcontent-%COMP%]:hover{\r\n    box-shadow: inset 300p 0 0 0 #1b4c6d;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmlnYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1EQUFtRDtBQUN2RDtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QixpQ0FBaUM7SUFDakMseUJBQXlCOztBQUU3QjtBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDIiwiZmlsZSI6Im5hdmlnYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTIwZGVnLCMwNzZhODMsIzQ0YzA4Mik7XHJcbn1cclxuLm5hdi1pdGVte1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBwYWRkaW5nOiAwIDQwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm9yZGVyOiByZ2IoMTUsIDE3OSwgMTApO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMCAjMWI0YzZkO1xyXG4gICAgdHJhbnNpdGlvbjogZWFzZS1vdXQgMC4zcztcclxuICAgIFxyXG59XHJcblxyXG4ubmF2LWl0ZW06aG92ZXJ7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAzMDBwIDAgMCAwICMxYjRjNmQ7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "pbC3":
/*!*****************************************************************!*\
  !*** ./src/app/components/libros-form/libros-form.component.ts ***!
  \*****************************************************************/
/*! exports provided: LibrosFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibrosFormComponent", function() { return LibrosFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_libros_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/libros.service */ "ECvv");
/* harmony import */ var _services_categorias_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/categorias.service */ "Xnfx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function LibrosFormComponent_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cat_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", cat_r1.idCategoria);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", cat_r1.nombreCategoria, " ");
} }
class LibrosFormComponent {
    constructor(librosService, categoriasService, router, activedRoute) {
        this.librosService = librosService;
        this.categoriasService = categoriasService;
        this.router = router;
        this.activedRoute = activedRoute;
        this.classes = 'row';
        this.libro = {
            clave: 0,
            categoria_idcategorias: 0,
            nombre: '',
            image: '',
            edicion: 0,
            cantidadTomos: 0,
            precio: 0,
            autor: '',
            horaEntrega: new Date()
        };
        this.categoria = [];
        this.edit = false;
    }
    traerCategorias() {
        this.categoriasService.getCategorias().subscribe(res => {
            this.categoria = res;
        }, err => console.error(err));
    }
    ngOnInit() {
        const params = this.activedRoute.snapshot.params;
        //console.log(params);
        this.traerCategorias();
        if (params.clave) {
            console.log(params);
            console.log('funciona');
            this.librosService.getCategorias2();
            this.librosService.getLibro(params.clave)
                .subscribe(res => {
                console.log(res);
                this.libro = res;
                this.edit = true;
            }, err => console.error(err));
        }
    }
    saveNewLibro() {
        //delete this.categoria.fechaIngreso;
        delete this.libro.clave;
        console.log(this.libro);
        if (!(this.libro.nombre == '' || this.libro.precio == 0 || this.libro.edicion == 0 || this.libro.categoria_idcategorias == 0 || this.libro.autor == '' || this.libro.cantidadTomos == 0)) {
            this.librosService.saveLibro(this.libro)
                .subscribe(res => {
                console.log(res);
                this.router.navigate(['/libro']);
            }, err => console.error(err));
        }
        else {
            alert('Lena todos los campos para continuar');
            console.log(this.libro);
        }
    }
    updateLibro() {
        if (!(this.libro.nombre == '' || this.libro.precio == 0 || this.libro.edicion == 0 || this.libro.categoria_idcategorias == 0 || this.libro.autor == '' || this.libro.cantidadTomos == 0)) {
            this.librosService.updateLibro(String(this.libro.clave), this.libro)
                .subscribe(res => {
                console.log(res);
                this.router.navigate(['/libro']);
            }, err => console.log(err));
        }
        else {
            alert('Lena todos los campos para continuar');
            console.log(this.libro);
        }
    }
}
LibrosFormComponent.ɵfac = function LibrosFormComponent_Factory(t) { return new (t || LibrosFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_libros_service__WEBPACK_IMPORTED_MODULE_1__["LibrosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_categorias_service__WEBPACK_IMPORTED_MODULE_2__["CategoriasService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
LibrosFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LibrosFormComponent, selectors: [["app-libros-form"]], hostVars: 2, hostBindings: function LibrosFormComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.classes);
    } }, decls: 52, vars: 16, consts: [[1, "col-md-4", "offset-md-4"], [1, "card"], [1, "card-body"], [1, "form-group"], ["type", "text", "name", "nombre", "placeholder", "titulo del libro", "autofocus", "", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "select", 1, "form-select", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "url", "name", "image", "placeholder", "Portada", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "edicion", "placeholder", "Que edicion es", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "cantidadTomos", "placeholder", "Cantidad de tomos", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "precio", "placeholder", "El precio es de", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "required", "", "name", "autor", "placeholder", "El autor es ", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "time", "required", "", "name", "horaEntrega", "placeholder", "ingresa la hora de entrega", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-success", "btn-block", 3, "click"], [1, "col-md-2"], [1, "card", "card-body", "text-center"], [1, "card-img-top", 3, "src"], [3, "value"]], template: function LibrosFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Ingresa el titulo del libro ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LibrosFormComponent_Template_input_ngModelChange_6_listener($event) { return ctx.libro.nombre = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Ingresa Categoria ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LibrosFormComponent_Template_select_ngModelChange_10_listener($event) { return ctx.libro.categoria_idcategorias = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, LibrosFormComponent_option_11_Template, 2, 2, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Ingresa la direccion de la imagen ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LibrosFormComponent_Template_input_ngModelChange_15_listener($event) { return ctx.libro.image = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Edicion ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LibrosFormComponent_Template_input_ngModelChange_18_listener($event) { return ctx.libro.edicion = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Cantidad de tomos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LibrosFormComponent_Template_input_ngModelChange_21_listener($event) { return ctx.libro.cantidadTomos = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Precio del libro ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LibrosFormComponent_Template_input_ngModelChange_24_listener($event) { return ctx.libro.precio = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Autor ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LibrosFormComponent_Template_input_ngModelChange_27_listener($event) { return ctx.libro.autor = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Hora Entrega ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LibrosFormComponent_Template_input_ngModelChange_30_listener($event) { return ctx.libro.horaEntrega = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LibrosFormComponent_Template_button_click_32_listener() { return ctx.edit ? ctx.updateLibro() : ctx.saveNewLibro(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Guardar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " La clave del libro es : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Edicion ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Autor ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " El precio es : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Cantidad de Tomos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.libro.nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.libro.categoria_idcategorias);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categoria);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.libro.image);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.libro.edicion);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.libro.cantidadTomos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.libro.precio);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.libro.autor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.libro.horaEntrega);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.libro.image == "" ? "/assets/imagee.png" : ctx.libro.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.libro.clave, ", ", ctx.libro.nombre == "" ? "Titulo del libro" : ctx.libro.nombre, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.libro.edicion == 0 ? "Escribe la edicion" : ctx.libro.edicion);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.libro.autor == "" ? "El autor es" : ctx.libro.autor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.libro.precio == 0 ? "Precio" : ctx.libro.precio);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.libro.cantidadTomos == 0 ? "Escribe la cantidad" : ctx.libro.cantidadTomos);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_z"]], styles: ["body[_ngcontent-%COMP%]{\r\n    margin:0;\r\n    padding:0;\r\n    background: linear-gradient(120deg,#1b4c6d,#640e64);\r\n    \r\n    height: 100vh;\r\n    overflow: hidden;\r\n    }\r\n    .card-Body[_ngcontent-%COMP%]{\r\n        position: absolute;\r\n        top: 50;\r\n        left: 50;\r\n        transform: translate(-50%,-50);\r\n        width: 400px;\r\n        background: rgb(29, 92, 209);\r\n        border-radius: 10px;\r\n    }\r\n    .card-Body[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n        text-align: center;\r\n        padding: 0 0 20px 0;\r\n        border-bottom: 1px solid silver;\r\n    }\r\n    .card-Body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{\r\n        padding: 0 40px;\r\n        box-sizing: border-box;\r\n    }\r\n    form[_ngcontent-%COMP%]   .card-Body[_ngcontent-%COMP%]{\r\n        position: relative;\r\n        border-bottom:  2px solid #adadad;\r\n        margin: 30px 0;\r\n    }\r\n    button[_ngcontent-%COMP%]{\r\n        border: 1px solid;\r\n        background:#095f30 ;\r\n        border: none;\r\n        font-size: 14px;\r\n        color: white;\r\n        background-color: rgb(255, 0, 68);\r\n        border-radius: 4px;\r\n        box-shadow: inset 0 0 0 0 #1b4c6d;\r\n        transition: ease-out 0.3s;\r\n        outline: none;\r\n\r\n    }\r\n    button[_ngcontent-%COMP%]:hover{\r\n        box-shadow: inset 300p 0 0 0 #1b4c6d;\r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnJvcy1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxRQUFRO0lBQ1IsU0FBUztJQUNULG1EQUFtRDs7SUFFbkQsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQjtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLE9BQU87UUFDUCxRQUFRO1FBQ1IsOEJBQThCO1FBQzlCLFlBQVk7UUFDWiw0QkFBNEI7UUFDNUIsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLCtCQUErQjtJQUNuQztJQUNBO1FBQ0ksZUFBZTtRQUNmLHNCQUFzQjtJQUMxQjtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLGlDQUFpQztRQUNqQyxjQUFjO0lBQ2xCO0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWixlQUFlO1FBQ2YsWUFBWTtRQUNaLGlDQUFpQztRQUNqQyxrQkFBa0I7UUFDbEIsaUNBQWlDO1FBQ2pDLHlCQUF5QjtRQUN6QixhQUFhOztJQUVqQjtJQUNBO1FBQ0ksb0NBQW9DO0lBQ3hDIiwiZmlsZSI6ImxpYnJvcy1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xyXG4gICAgbWFyZ2luOjA7XHJcbiAgICBwYWRkaW5nOjA7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTIwZGVnLCMxYjRjNmQsIzY0MGU2NCk7XHJcbiAgICBcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgfVxyXG4gICAgLmNhcmQtQm9keXtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA1MDtcclxuICAgICAgICBsZWZ0OiA1MDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCk7XHJcbiAgICAgICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYigyOSwgOTIsIDIwOSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIH1cclxuICAgIC5jYXJkLUJvZHkgaDF7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMCAyMHB4IDA7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHNpbHZlcjtcclxuICAgIH1cclxuICAgIC5jYXJkLUJvZHkgZm9ybXtcclxuICAgICAgICBwYWRkaW5nOiAwIDQwcHg7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIH1cclxuICAgIGZvcm0gLmNhcmQtQm9keXtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogIDJweCBzb2xpZCAjYWRhZGFkO1xyXG4gICAgICAgIG1hcmdpbjogMzBweCAwO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbntcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiMwOTVmMzAgO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDAsIDY4KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMCAjMWI0YzZkO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGVhc2Utb3V0IDAuM3M7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuXHJcbiAgICB9XHJcbiAgICBidXR0b246aG92ZXJ7XHJcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMzAwcCAwIDAgMCAjMWI0YzZkO1xyXG4gICAgfVxyXG4iXX0= */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_categorias_list_categorias_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/categorias-list/categorias-list.component */ "xdXY");
/* harmony import */ var _components_categorias_form_categorias_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/categorias-form/categorias-form.component */ "X4ga");
/* harmony import */ var _components_libros_list_libros_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/libros-list/libros-list.component */ "3+2w");
/* harmony import */ var _components_libros_form_libros_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/libros-form/libros-form.component */ "pbC3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    {
        path: '',
        redirectTo: '/libro',
        pathMatch: 'full'
    },
    {
        path: 'categoria',
        component: _components_categorias_list_categorias_list_component__WEBPACK_IMPORTED_MODULE_1__["CategoriasListComponent"]
    },
    {
        path: 'categoria/add',
        component: _components_categorias_form_categorias_form_component__WEBPACK_IMPORTED_MODULE_2__["CategoriasFormComponent"]
    },
    {
        path: 'categoria/edit/:idCategorias',
        component: _components_categorias_form_categorias_form_component__WEBPACK_IMPORTED_MODULE_2__["CategoriasFormComponent"]
    },
    {
        path: 'libro',
        component: _components_libros_list_libros_list_component__WEBPACK_IMPORTED_MODULE_3__["LibrosListComponent"]
    },
    {
        path: 'libro/add',
        component: _components_libros_form_libros_form_component__WEBPACK_IMPORTED_MODULE_4__["LibrosFormComponent"]
    },
    {
        path: 'libro/edit/:clave',
        component: _components_libros_form_libros_form_component__WEBPACK_IMPORTED_MODULE_4__["LibrosFormComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "xdXY":
/*!*************************************************************************!*\
  !*** ./src/app/components/categorias-list/categorias-list.component.ts ***!
  \*************************************************************************/
/*! exports provided: CategoriasListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriasListComponent", function() { return CategoriasListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_categorias_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/categorias.service */ "Xnfx");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




const _c0 = function (a1) { return ["/categoria/edit", a1]; };
function CategoriasListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoriasListComponent_div_0_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const categoria_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.deleteCategoria(categoria_r1.idCategoria); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " EDIT CATEGORIA ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const categoria_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", categoria_r1.nombreCategoria, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", categoria_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Categoria ", categoria_r1.nombreCategoria, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Editorial ", categoria_r1.editorial, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Id ", categoria_r1.idCategoria, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, categoria_r1.idCategoria));
} }
class CategoriasListComponent {
    constructor(categoriasService) {
        this.categoriasService = categoriasService;
        this.classes = 'row';
        this.categorias = [];
    }
    ngOnInit() {
        this.getCategorias();
    }
    getCategorias() {
        this.categoriasService.getCategorias().subscribe(res => {
            this.categorias = res;
        }, err => console.error(err));
    }
    deleteCategoria(idCategoria) {
        this.categoriasService.deleteCategoria(idCategoria).subscribe(res => {
            console.log(res);
            this.getCategorias();
        }, err => console.log(err));
    }
}
CategoriasListComponent.ɵfac = function CategoriasListComponent_Factory(t) { return new (t || CategoriasListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_categorias_service__WEBPACK_IMPORTED_MODULE_1__["CategoriasService"])); };
CategoriasListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CategoriasListComponent, selectors: [["app-categorias-list"]], hostVars: 2, hostBindings: function CategoriasListComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.classes);
    } }, decls: 1, vars: 1, consts: [["class", "col-md-4", 4, "ngFor", "ngForOf"], [1, "col-md-4"], [1, "card", "text-center"], [1, "card-header", "bg-dark", "text-white", "d-flex", "justify-content-between", "align-items-center"], [1, "btn", "btn-danger", 3, "click"], [1, "far", "fa-trash-alt"], [1, "card-img-top", 3, "src"], [1, "car-body"], [1, "btn", "btn-info", "btn-block", 3, "routerLink"]], template: function CategoriasListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CategoriasListComponent_div_0_Template, 16, 8, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categorias);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yaWFzLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map