import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {AppRoutingModule} from './app-routing.module';

import {AccordionModule} from 'primeng/accordion';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {BadgeModule} from 'primeng/badge';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {ButtonModule} from 'primeng/button';
import {CalendarModule} from 'primeng/calendar';
import {CardModule} from 'primeng/card';
import {CarouselModule} from 'primeng/carousel';
import {CascadeSelectModule} from 'primeng/cascadeselect';
import {ChartModule} from 'primeng/chart';
import {CheckboxModule} from 'primeng/checkbox';
import {ChipModule} from 'primeng/chip';
import {ChipsModule} from 'primeng/chips';
import {CodeHighlighterModule} from 'primeng/codehighlighter';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {ColorPickerModule} from 'primeng/colorpicker';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DataViewModule} from 'primeng/dataview';
import {DialogModule} from 'primeng/dialog';
import {DividerModule} from 'primeng/divider';
import {DropdownModule} from 'primeng/dropdown';
import {FieldsetModule} from 'primeng/fieldset';
import {FileUploadModule} from 'primeng/fileupload';
import {FullCalendarModule} from 'primeng/fullcalendar';
import {GalleriaModule} from 'primeng/galleria';
import {InplaceModule} from 'primeng/inplace';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputMaskModule} from 'primeng/inputmask';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {KnobModule} from 'primeng/knob';
import {LightboxModule} from 'primeng/lightbox';
import {ListboxModule} from 'primeng/listbox';
import {MegaMenuModule} from 'primeng/megamenu';
import {MenuModule} from 'primeng/menu';
import {MenubarModule} from 'primeng/menubar';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {MultiSelectModule} from 'primeng/multiselect';
import {OrderListModule} from 'primeng/orderlist';
import {OrganizationChartModule} from 'primeng/organizationchart';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {PaginatorModule} from 'primeng/paginator';
import {PanelModule} from 'primeng/panel';
import {PanelMenuModule} from 'primeng/panelmenu';
import {PasswordModule} from 'primeng/password';
import {PickListModule} from 'primeng/picklist';
import {ProgressBarModule} from 'primeng/progressbar';
import {RadioButtonModule} from 'primeng/radiobutton';
import {RatingModule} from 'primeng/rating';
import {RippleModule} from 'primeng/ripple';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {ScrollTopModule} from 'primeng/scrolltop';
import {SelectButtonModule} from 'primeng/selectbutton';
import {SidebarModule} from 'primeng/sidebar';
import {SkeletonModule} from 'primeng/skeleton';
import {SlideMenuModule} from 'primeng/slidemenu';
import {SliderModule} from 'primeng/slider';
import {SplitButtonModule} from 'primeng/splitbutton';
import {SplitterModule} from 'primeng/splitter';
import {StepsModule} from 'primeng/steps';
import {TabMenuModule} from 'primeng/tabmenu';
import {TableModule} from 'primeng/table';
import {TabViewModule} from 'primeng/tabview';
import {TagModule} from 'primeng/tag';
import {TerminalModule} from 'primeng/terminal';
import {TieredMenuModule} from 'primeng/tieredmenu';
import {TimelineModule} from 'primeng/timeline';
import {ToastModule} from 'primeng/toast';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {ToolbarModule} from 'primeng/toolbar';
import {TooltipModule} from 'primeng/tooltip';
import {TreeModule} from 'primeng/tree';
import {TreeTableModule} from 'primeng/treetable';
import {VirtualScrollerModule} from 'primeng/virtualscroller';

import {AppComponent} from './app.component';
import {AppCodeModule} from './app.code.component';
import {AppMainComponent} from './app.main.component';
import {AppConfigComponent} from './app.config.component';
import {AppCrudComponent} from './pages/app.crud.component';
import {AppCalendarComponent} from './pages/app.calendar.component';
import {AppTimelineDemoComponent} from './pages/app.timelinedemo.component';
import {AppNotfoundComponent} from './pages/app.notfound.component';
import {AppErrorComponent} from './pages/app.error.component';
import {AppAccessdeniedComponent} from './pages/app.accessdenied.component';
import {AppLoginComponent} from './pages/app.login.component';
import {AppMenuComponent} from './app.menu.component';
import {AppMenuitemComponent} from './app.menuitem.component';
import {AppRightMenuComponent} from './app.right-menu.component';
import {AppTopBarComponent} from './app.topbar.component';
import {AppFooterComponent} from './app.footer.component';
import {FormLayoutDemoComponent} from './demo/view/formlayoutdemo.component';
import {FloatLabelDemoComponent} from './demo/view/floatlabeldemo.component';
import {InvalidStateDemoComponent} from './demo/view/invalidstatedemo.component';
import {InputDemoComponent} from './demo/view/inputdemo.component';
import {ButtonDemoComponent} from './demo/view/buttondemo.component';
import {TableDemoComponent} from './demo/view/tabledemo.component';
import {ListDemoComponent} from './demo/view/listdemo.component';
import {TreeDemoComponent} from './demo/view/treedemo.component';
import {PanelsDemoComponent} from './demo/view/panelsdemo.component';
import {OverlaysDemoComponent} from './demo/view/overlaysdemo.component';
import {MediaDemoComponent} from './demo/view/mediademo.component';
import {MenusDemoComponent} from './demo/view/menusdemo.component';
import {MessagesDemoComponent} from './demo/view/messagesdemo.component';
import {MiscDemoComponent} from './demo/view/miscdemo.component';
import {EmptyDemoComponent} from './demo/view/emptydemo.component';
import {ChartsDemoComponent} from './demo/view/chartsdemo.component';
import {FileDemoComponent} from './demo/view/filedemo.component';
import {DashboardDemoComponent} from './demo/view/dashboarddemo.component';
import {DocumentationComponent} from './demo/view/documentation.component';
import {DisplayComponent} from './utilities/display.component';
import {ElevationComponent} from './utilities/elevation.component';
import {FlexboxComponent} from './utilities/flexbox.component';
import {GridComponent} from './utilities/grid.component';
import {IconsComponent} from './utilities/icons.component';
import {SpacingComponent} from './utilities/spacing.component';
import {TypographyComponent} from './utilities/typography.component';
import {TextComponent} from './utilities/text.component';
import {WidgetsComponent} from './utilities/widgets.component';

import {CountryService} from './demo/service/countryservice';
import {EventService} from './demo/service/eventservice';
import {NodeService} from './demo/service/nodeservice';
import {MenuService} from './app.menu.service';
import {CustomerService} from './demo/service/customerservice';
import {PhotoService} from './demo/service/photoservice';
import {ProductService} from './demo/service/productservice';
import {IconService} from './demo/service/iconservice';
import {CommandeCreateComponent} from './view/admin/commandes/commande-create/commande-create.component';
import {CommandesComponent} from './view/admin/commandes/commandes.component';
import {CommandeListComponent} from './view/admin/commandes/commande-list/commande-list.component';
import {CommandeViewComponent} from './view/admin/commandes/commande-view/commande-view.component';
import {CommandeEditComponent} from './view/admin/commandes/commande-edit/commande-edit.component';

import {ParcoursEditComponent} from './view/admin/learn/parcours-edit/parcours-edit.component';
import {CoursListComponent} from './view/admin/learn/cours-list/cours-list.component';
import {CoursEditComponent} from './view/admin/learn/cours-edit/cours-edit.component';
import {SectionListComponent} from './view/admin/learn/section-list/section-list.component';
import {SectionViewComponent} from './view/admin/learn/section-view/section-view.component';
import {SectionEditComponent} from './view/admin/learn/section-edit/section-edit.component';
import {LearnComponent} from './view/admin/learn/learn.component';
import {ParcoursListComponent} from './view/admin/learn/parcours-list/parcours-list.component';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ProfListComponent} from './view/Prof/Classes/profclasses/prof-list/prof-list.component';
import {QuizViewComponent} from './view/Prof/Classes/profclasses/quiz-view/quiz-view.component';
import {EtudiantssViewComponent} from './view/Prof/etudiants/etudiantss-view/etudiantss-view.component';
import {ClassRoomListComponent} from './view/Prof/Classes/profclasses/class-room-list/class-room-list.component';
import {HomeComponent} from './view/Prof/home/home.component';
import {ProfclassesComponent} from './view/Prof/Classes/profclasses/profclasses.component';
import {EtudiantttViewComponent} from './view/Prof/Classes/profclasses/etudianttt-view/etudianttt-view.component';
import {EtudiantCreateComponent} from './view/Prof/etudiants/etudiant-create/etudiant-create.component';
import {EtudiantEditComponent} from './view/Prof/etudiants/etudiant-edit/etudiant-edit.component';
import {EtudiantListComponent} from './view/Prof/etudiants/etudiant-list/etudiant-list.component';
import {InscriptionCreateComponent} from './view/Prof/inscriptions/inscription-create/inscription-create.component';
import {InscriptionEditComponent} from './view/Prof/inscriptions/inscription-edit/inscription-edit.component';
import {InscriptionListComponent} from './view/Prof/inscriptions/inscription-list/inscription-list.component';
import {InscriptionViewComponent} from './view/Prof/inscriptions/inscription-view/inscription-view.component';
import {InscriptionsComponent} from './view/Prof/inscriptions/inscriptions.component';
import {CategorieProfViewComponent} from './view/Prof/parcrs/categorie-prof-view/categorie-prof-view.component';
import {CoursesComponent} from './view/Prof/parcrs/courses/courses.component';
import {EdCoursesComponent} from './view/Prof/parcrs/ed-courses/ed-courses.component';
import {SalaryComponent} from './view/Prof/parcrs/salary/salary.component';
import {SectionsComponent} from './view/Prof/parcrs/sections/sections.component';
import {ParcrsComponent} from './view/Prof/parcrs/parcrs.component';
import {RecommendComponent} from './view/Prof/recommend/recommend.component';
import {EtudiantsComponent} from './view/Prof/etudiants/etudiants.component';
import { QuizCreateComponent } from './view/Prof/quiz/quiz-create/quiz-create.component';
import { QuizPreviewComponent } from './view/Prof/quiz/quiz-preview/quiz-preview.component';
import { QuizConfigComponent } from './view/Prof/quiz/quiz-config/quiz-config.component';
import { ScheduleComponent } from './view/Prof/schedule/schedule.component';
import {EtudiantCoursesComponent} from './view/etudiant/etudiant-courses/etudiant-courses.component';
import {EtudiantSectionsComponent} from './view/etudiant/etudiant-sections/etudiant-sections.component';
import { FaqAnswerComponent } from './view/admin/faq-admin/faq-answer/faq-answer.component';
import { NewsAdminListComponent } from './view/admin/news-admin/news-admin-list/news-admin-list.component';
import { NewsAdminViewComponent } from './view/admin/news-admin/news-admin-view/news-admin-view.component';
import { NewsAdminCreateComponent } from './view/admin/news-admin/news-admin-create/news-admin-create.component';
import { NewsTeacherListComponent } from './view/teacher/news/news-teacher-list/news-teacher-list.component';
import { NewsTeacherViewComponent } from './view/teacher/news/news-teacher-view/news-teacher-view.component';
import { FaqListComponent } from './view/teacher/faq/faq-list/faq-list.component';
import { FaqContactComponent } from './view/teacher/faq/faq-contact/faq-contact.component';
import {LoginEtudiantComponent} from './view/etudiant/login-etudiant/login-etudiant.component';
import {LoginProfComponent} from './view/teacher/login-prof/login-prof.component';
import {LoginAdminComponent} from './view/admin/login-admin/login-admin.component';
import { QuizEtudiantComponent } from './view/etudiant/quiz-etudiant/quiz-etudiant.component';
import {ParcoursCreateComponent} from './view/admin/learn/parcours-create/parcours-create.component';
import {CoursCreateComponent} from './view/admin/learn/cours-create/cours-create.component';
import {SectionSimulateComponent} from './view/Prof/parcrs/section-simulate/section-simulate.component';
import {ChooseViewComponent} from './view/Prof/parcrs/choose-view/choose-view.component';
import { InscriptionAdminComponent } from './View/Admin/inscription-admin/inscription-admin.component';




@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        AppCodeModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AccordionModule,
        AutoCompleteModule,
        AvatarModule,
        AvatarGroupModule,
        BadgeModule,
        BreadcrumbModule,
        ButtonModule,
        CalendarModule,
        CardModule,
        CarouselModule,
        CascadeSelectModule,
        ChartModule,
        CheckboxModule,
        ChipModule,
        ChipsModule,
        CodeHighlighterModule,
        ConfirmDialogModule,
        ConfirmPopupModule,
        ColorPickerModule,
        ContextMenuModule,
        DataViewModule,
        DialogModule,
        DividerModule,
        DropdownModule,
        FieldsetModule,
        FileUploadModule,
        FullCalendarModule,
        GalleriaModule,
        InplaceModule,
        InputNumberModule,
        InputMaskModule,
        InputSwitchModule,
        InputTextModule,
        InputTextareaModule,
        KnobModule,
        LightboxModule,
        ListboxModule,
        MegaMenuModule,
        MenuModule,
        MenubarModule,
        MessageModule,
        MessagesModule,
        MultiSelectModule,
        OrderListModule,
        OrganizationChartModule,
        OverlayPanelModule,
        PaginatorModule,
        PanelModule,
        PanelMenuModule,
        PasswordModule,
        PickListModule,
        ProgressBarModule,
        RadioButtonModule,
        RatingModule,
        RippleModule,
        ScrollPanelModule,
        ScrollTopModule,
        SelectButtonModule,
        SidebarModule,
        SkeletonModule,
        SlideMenuModule,
        SliderModule,
        SplitButtonModule,
        SplitterModule,
        StepsModule,
        TableModule,
        TabMenuModule,
        TabViewModule,
        TagModule,
        TerminalModule,
        TimelineModule,
        TieredMenuModule,
        ToastModule,
        ToggleButtonModule,
        ToolbarModule,
        TooltipModule,
        TreeModule,
        TreeTableModule,
        VirtualScrollerModule,
    ],
    declarations: [
        AppComponent,
        AppMainComponent,
        AppMenuComponent,
        AppMenuitemComponent,
        AppConfigComponent,
        AppRightMenuComponent,
        AppTopBarComponent,
        AppFooterComponent,
        DashboardDemoComponent,
        FormLayoutDemoComponent,
        FloatLabelDemoComponent,
        InvalidStateDemoComponent,
        InputDemoComponent,
        ButtonDemoComponent,
        TableDemoComponent,
        ListDemoComponent,
        TreeDemoComponent,
        PanelsDemoComponent,
        OverlaysDemoComponent,
        MediaDemoComponent,
        MenusDemoComponent,
        MessagesDemoComponent,
        MessagesDemoComponent,
        MiscDemoComponent,
        ChartsDemoComponent,
        EmptyDemoComponent,
        FileDemoComponent,
        DocumentationComponent,
        DisplayComponent,
        ElevationComponent,
        FlexboxComponent,
        GridComponent,
        IconsComponent,
        SpacingComponent,
        TypographyComponent,
        TextComponent,
        AppCrudComponent,
        AppCalendarComponent,
        AppTimelineDemoComponent,
        WidgetsComponent,
        AppNotfoundComponent,
        AppErrorComponent,
        AppAccessdeniedComponent,
        AppLoginComponent,
        CommandeCreateComponent,
        CommandesComponent,
        CommandeListComponent,
        CommandeEditComponent,
        CommandeViewComponent,
        LearnComponent,
        ParcoursListComponent,
        ParcoursCreateComponent,
        ParcoursEditComponent,
        CoursListComponent,
        CoursCreateComponent,
        CoursEditComponent,
        SectionListComponent,
        SectionViewComponent,
        SectionEditComponent,
        ProfListComponent,
        ClassRoomListComponent,
        EtudiantssViewComponent,
        HomeComponent,
        QuizViewComponent,
        EtudiantCreateComponent,
        EtudiantEditComponent,
        EtudiantListComponent,
        InscriptionCreateComponent,
        InscriptionListComponent,
        InscriptionViewComponent,
        CategorieProfViewComponent,
        SectionsComponent,
        ParcrsComponent,
        RecommendComponent,
        CoursesComponent,
        EdCoursesComponent,
        SalaryComponent,
        InscriptionEditComponent,
        EtudiantttViewComponent,
        EtudiantsComponent,
        EtudiantssViewComponent,
        EtudiantCreateComponent,
        EtudiantListComponent,
        EtudiantEditComponent,
        InscriptionsComponent,
        ProfclassesComponent,
        QuizCreateComponent,
        QuizPreviewComponent,
        QuizConfigComponent,
        EtudiantCoursesComponent,
        EtudiantSectionsComponent,
        ScheduleComponent,
        FaqAnswerComponent,
        NewsAdminListComponent,
        NewsAdminViewComponent,
        NewsAdminCreateComponent,
        NewsTeacherListComponent,
        NewsTeacherViewComponent,
        FaqListComponent,
        FaqContactComponent,
        LoginEtudiantComponent,
        LoginProfComponent,
        LoginAdminComponent,
        QuizEtudiantComponent,
        ChooseViewComponent,
        SectionSimulateComponent,
        InscriptionAdminComponent
    ],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService, MenuService , MessageService , ConfirmationService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
