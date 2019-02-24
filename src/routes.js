import Home from './components/home.vue';
import Messages from './components/messages.vue';
import Keywords from './components/keywords.vue'
import Vote from './components/vote.vue'
import PanelLeft from './components/panel-left.vue';
import PanelRight from './components/panel-right.vue';
import About from './components/about.vue';

// import Accordion from './components/accordion.vue';
// import ActionSheet from './components/action-sheet.vue';
// import Autocomplete from './components/autocomplete.vue';
// import Badge from './components/badge.vue';
// import Buttons from './components/buttons.vue';
// import Calendar from './components/calendar.vue';
// import CalendarPage from './components/calendar-page.vue';
// import Cards from './components/cards.vue';
// import CardsExpandable from './components/cards-expandable.vue';
// import Checkbox from './components/checkbox.vue';
// import Chips from './components/chips.vue';
// import ContactsList from './components/contacts-list.vue';
// import ContentBlock from './components/content-block.vue';
// import DataTable from './components/data-table.vue';
// import Dialog from './components/dialog.vue';
// import Elevation from './components/elevation.vue';
// import Fab from './components/fab.vue';
// import FabMorph from './components/fab-morph.vue';
// import FormStorage from './components/form-storage.vue';
// import Gauge from './components/gauge.vue';
// import Grid from './components/grid.vue';
// import Icons from './components/icons.vue';
// import InfiniteScroll from './components/infinite-scroll.vue';
// import Inputs from './components/inputs.vue';
// import LazyLoad from './components/lazy-load.vue';
// import List from './components/list.vue';
// import ListIndex from './components/list-index.vue';
// import LoginScreen from './components/login-screen.vue';
// import LoginScreenPage from './components/login-screen-page.vue';
// import Menu from './components/menu.vue';
// import Navbar from './components/navbar.vue';
// import NavbarHideScroll from './components/navbar-hide-scroll.vue';
// import Notifications from './components/notifications.vue';
import Panel from './components/panel.vue';
// import PhotoBrowser from './components/photo-browser.vue';
// import Picker from './components/picker.vue';
// import Popup from './components/popup.vue';
// import Popover from './components/popover.vue';
// import Preloader from './components/preloader.vue';
// import Progressbar from './components/progressbar.vue';
// import PullToRefresh from './components/pull-to-refresh.vue';
// import Radio from './components/radio.vue';
// import Range from './components/range.vue';
// import Searchbar from './components/searchbar.vue';
// import SearchbarExpandable from './components/searchbar-expandable.vue';
// import SheetModal from './components/sheet-modal.vue';
// import Skeleton from './components/skeleton.vue';
// import SmartSelect from './components/smart-select.vue';
// import Sortable from './components/sortable.vue';
// import Statusbar from './components/statusbar.vue';
// import Stepper from './components/stepper.vue';
// import Subnavbar from './components/subnavbar.vue';
// import SubnavbarTitle from './components/subnavbar-title.vue';
// import Swiper from './components/swiper.vue';
// import SwiperHorizontal from './components/swiper-horizontal.vue';
// import SwiperVertical from './components/swiper-vertical.vue';
// import SwiperSpaceBetween from './components/swiper-space-between.vue';
// import SwiperMultiple from './components/swiper-multiple.vue';
// import SwiperNested from './components/swiper-nested.vue';
// import SwiperLoop from './components/swiper-loop.vue';
// import Swiper3dCube from './components/swiper-3d-cube.vue';
// import Swiper3dCoverflow from './components/swiper-3d-coverflow.vue';
// import Swiper3dFlip from './components/swiper-3d-flip.vue';
// import SwiperFade from './components/swiper-fade.vue';
// import SwiperScrollbar from './components/swiper-scrollbar.vue';
// import SwiperGallery from './components/swiper-gallery.vue';
// import SwiperCustomControls from './components/swiper-custom-controls.vue';
// import SwiperParallax from './components/swiper-parallax.vue';
// import SwiperLazy from './components/swiper-lazy.vue';
// import SwiperPaginationProgress from './components/swiper-pagination-progress.vue';
// import SwiperPaginationFraction from './components/swiper-pagination-fraction.vue';
// import SwiperZoom from './components/swiper-zoom.vue';
// import Swipeout from './components/swipeout.vue';
// import Tabs from './components/tabs.vue';
// import TabsStatic from './components/tabs-static.vue';
// import TabsAnimated from './components/tabs-animated.vue';
// import TabsSwipeable from './components/tabs-swipeable.vue';
// import TabsRoutable from './components/tabs-routable.vue';
// import Toast from './components/toast.vue';
// import Toggle from './components/toggle.vue';
// import ToolbarTabbar from './components/toolbar-tabbar.vue';
// import Tabbar from './components/tabbar.vue';
// import TabbarLabels from './components/tabbar-labels.vue';
// import TabbarScrollable from './components/tabbar-scrollable.vue';
// import ToolbarHideScroll from './components/toolbar-hide-scroll.vue';
// import Tooltip from './components/tooltip.vue';
// import Timeline from './components/timeline.vue';
// import TimelineVertical from './components/timeline-vertical.vue';
// import TimelineHorizontal from './components/timeline-horizontal.vue';
// import TimelineHorizontalCalendar from './components/timeline-horizontal-calendar.vue';
// import VirtualList from './components/virtual-list.vue';
// import ColorThemes from './components/color-themes.vue';

// import RoutableModals from './components/routable-modals.vue';
// import RoutablePopup from './components/routable-popup.vue';
// import RoutableActions from './components/routable-actions.vue';

// import MasterDetailMaster from './components/master-detail-master.vue';
// import MasterDetailDetail from './components/master-detail-detail.vue';

import NotFound from './components/404.vue';

// Pages
export default [
  // Index page
  {
    path: '/',
    component: Messages,
  },
  {
    path: '/keywords/',
    component: Keywords,
  },
  {
    path: '/messages/',
    component: Messages,
  },
  {
    path: '/vote/',
    component: Vote,
  },
  // About page
  {
    path: '/about/',
    component: About,
  },
  // Left Panel
  {
    path: '/panel-left/',
    component: PanelLeft,
  },
  // Right Panel
  {
    path: '/panel-right/',
    component: PanelRight,
  },
  // Right Panel pages
  {
    path: '/panel-right-1/',
    content: `
      <div class="page">
        <div class="navbar">
          <div class="navbar-inner sliding">
            <div class="left">
              <a href="#" class="link back">
                <i class="icon icon-back"></i>
                <span class="ios-only">Back</span>
              </a>
            </div>
            <div class="title">Panel Page 1</div>
          </div>
        </div>
        <div class="page-content">
          <div class="block">
            <p>This is a right panel page 1</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo saepe aspernatur inventore dolorum voluptates consequatur tempore ipsum! Quia, incidunt, aliquam sit veritatis nisi aliquid porro similique ipsa mollitia eaque ex!</p>
          </div>
        </div>
      </div>
    `,
  },
  {
    path: '/panel-right-2/',
    content: `
      <div class="page">
        <div class="navbar">
          <div class="navbar-inner sliding">
            <div class="left">
              <a href="#" class="link back">
                <i class="icon icon-back"></i>
                <span class="ios-only">Back</span>
              </a>
            </div>
            <div class="title">Panel Page 2</div>
          </div>
        </div>
        <div class="page-content">
          <div class="block">
            <p>This is a right panel page 2</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo saepe aspernatur inventore dolorum voluptates consequatur tempore ipsum! Quia, incidunt, aliquam sit veritatis nisi aliquid porro similique ipsa mollitia eaque ex!</p>
          </div>
        </div>
      </div>
    `,
  },

  // Components
  // {
  //   path: '/accordion/',
  //   component: Accordion,
  // },
  // {
  //   path: '/action-sheet/',
  //   component: ActionSheet,
  // },
  // {
  //   path: '/autocomplete/',
  //   component: Autocomplete,
  // },
  // {
  //   path: '/badge/',
  //   component: Badge,
  // },
  // {
  //   path: '/buttons/',
  //   component: Buttons,
  // },
  // {
  //   path: '/calendar/',
  //   component: Calendar,
  // },
  // {
  //   path: '/calendar-page/',
  //   component: CalendarPage,
  // },
  // {
  //   path: '/cards/',
  //   component: Cards,
  // },
  // {
  //   path: '/cards-expandable/',
  //   component: CardsExpandable,
  // },
  // {
  //   path: '/checkbox/',
  //   component: Checkbox,
  // },
  // {
  //   path: '/chips/',
  //   component: Chips,
  // },
  // {
  //   path: '/contacts-list/',
  //   component: ContactsList,
  // },
  // {
  //   path: '/content-block/',
  //   component: ContentBlock,
  // },
  // {
  //   path: '/data-table/',
  //   component: DataTable,
  // },
  // {
  //   path: '/dialog/',
  //   component: Dialog,
  // },
  // {
  //   path: '/elevation/',
  //   component: Elevation,
  // },
  // {
  //   path: '/fab/',
  //   component: Fab,
  // },
  // {
  //   path: '/fab-morph/',
  //   component: FabMorph,
  // },
  // {
  //   path: '/form-storage/',
  //   component: FormStorage,
  // },
  // {
  //   path: '/gauge/',
  //   component: Gauge,
  // },
  // {
  //   path: '/grid/',
  //   component: Grid,
  // },
  // {
  //   path: '/icons/',
  //   component: Icons,
  // },
  // {
  //   path: '/infinite-scroll/',
  //   component: InfiniteScroll,
  // },
  // {
  //   path: '/inputs/',
  //   component: Inputs,
  // },
  // {
  //   path: '/lazy-load/',
  //   component: LazyLoad,
  // },
  // {
  //   path: '/list/',
  //   component: List,
  // },
  // {
  //   path: '/list-index/',
  //   component: ListIndex,
  // },
  // {
  //   path: '/login-screen/',
  //   component: LoginScreen,
  // },
  // {
  //   path: '/login-screen-page/',
  //   component: LoginScreenPage,
  // },
  // {
  //   path: '/menu/',
  //   component: Menu,
  // },
  // {
  //   path: '/navbar/',
  //   component: Navbar,
  // },
  // {
  //   path: '/navbar-hide-scroll/',
  //   component: NavbarHideScroll,
  // },
  // {
  //   path: '/notifications/',
  //   component: Notifications,
  // },
  // {
  //   path: '/panel/',
  //   component: Panel,
  // },
  // {
  //   path: '/photo-browser/',
  //   component: PhotoBrowser,
  // },
  // {
  //   path: '/picker/',
  //   component: Picker,
  // },
  // {
  //   path: '/popup/',
  //   component: Popup,
  // },
  // {
  //   path: '/popover/',
  //   component: Popover,
  // },
  // {
  //   path: '/preloader/',
  //   component: Preloader,
  // },
  // {
  //   path: '/progressbar/',
  //   component: Progressbar,
  // },
  // {
  //   path: '/pull-to-refresh/',
  //   component: PullToRefresh,
  // },
  // {
  //   path: '/radio/',
  //   component: Radio,
  // },
  // {
  //   path: '/range/',
  //   component: Range,
  // },
  // {
  //   path: '/searchbar/',
  //   component: Searchbar,
  // },
  // {
  //   path: '/searchbar-expandable/',
  //   component: SearchbarExpandable,
  // },
  // {
  //   path: '/sheet-modal/',
  //   component: SheetModal,
  // },
  // {
  //   path: '/skeleton/',
  //   component: Skeleton,
  // },
  // {
  //   path: '/smart-select/',
  //   component: SmartSelect,
  // },
  // {
  //   path: '/sortable/',
  //   component: Sortable,
  // },
  // {
  //   path: '/statusbar/',
  //   component: Statusbar,
  // },
  // {
  //   path: '/stepper/',
  //   component: Stepper,
  // },
  // {
  //   path: '/subnavbar/',
  //   component: Subnavbar,
  // },
  // {
  //   path: '/subnavbar-title/',
  //   component: SubnavbarTitle,
  // },
  // {
  //   path: '/swiper/',
  //   component: Swiper,
  //   routes: [
  //     {
  //       path: 'swiper-horizontal/',
  //       component: SwiperHorizontal,
  //     },
  //     {
  //       path: 'swiper-vertical/',
  //       component: SwiperVertical,
  //     },
  //     {
  //       path: 'swiper-space-between/',
  //       component: SwiperSpaceBetween,
  //     },
  //     {
  //       path: 'swiper-multiple/',
  //       component: SwiperMultiple,
  //     },
  //     {
  //       path: 'swiper-nested/',
  //       component: SwiperNested,
  //     },
  //     {
  //       path: 'swiper-loop/',
  //       component: SwiperLoop,
  //     },
  //     {
  //       path: 'swiper-3d-cube/',
  //       component: Swiper3dCube,
  //     },
  //     {
  //       path: 'swiper-3d-coverflow/',
  //       component: Swiper3dCoverflow,
  //     },
  //     {
  //       path: 'swiper-3d-flip/',
  //       component: Swiper3dFlip,
  //     },
  //     {
  //       path: 'swiper-fade/',
  //       component: SwiperFade,
  //     },
  //     {
  //       path: 'swiper-scrollbar/',
  //       component: SwiperScrollbar,
  //     },
  //     {
  //       path: 'swiper-gallery/',
  //       component: SwiperGallery,
  //     },
  //     {
  //       path: 'swiper-custom-controls/',
  //       component: SwiperCustomControls,
  //     },
  //     {
  //       path: 'swiper-parallax/',
  //       component: SwiperParallax,
  //     },
  //     {
  //       path: 'swiper-lazy/',
  //       component: SwiperLazy,
  //     },
  //     {
  //       path: 'swiper-pagination-progress/',
  //       component: SwiperPaginationProgress,
  //     },
  //     {
  //       path: 'swiper-pagination-fraction/',
  //       component: SwiperPaginationFraction,
  //     },
  //     {
  //       path: 'swiper-zoom/',
  //       component: SwiperZoom,
  //     },
  //   ],
  // },
  // {
  //   path: '/swipeout/',
  //   component: Swipeout,
  // },
  // {
  //   path: '/tabs/',
  //   component: Tabs,
  // },
  // {
  //   path: '/tabs-static/',
  //   component: TabsStatic,
  // },
  // {
  //   path: '/tabs-animated/',
  //   component: TabsAnimated,
  // },
  // {
  //   path: '/tabs-swipeable/',
  //   component: TabsSwipeable,
  // },
  // {
  //   path: '/tabs-routable/',
  //   component: TabsRoutable,
  //   tabs: [
  //     {
  //       path: '/',
  //       id: 'tab1',
  //       content: `
  //       <div class="block">
  //         <p>Tab 1 content</p>
  //         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam enim quia molestiae facilis laudantium voluptates obcaecati officia cum, sit libero commodi. Ratione illo suscipit temporibus sequi iure ad laboriosam accusamus?</p>
  //         <p>Saepe explicabo voluptas ducimus provident, doloremque quo totam molestias! Suscipit blanditiis eaque exercitationem praesentium reprehenderit, fuga accusamus possimus sed, sint facilis ratione quod, qui dignissimos voluptas! Aliquam rerum consequuntur deleniti.</p>
  //         <p>Totam reprehenderit amet commodi ipsum nam provident doloremque possimus odio itaque, est animi culpa modi consequatur reiciendis corporis libero laudantium sed eveniet unde delectus a maiores nihil dolores? Natus, perferendis.</p>
  //       </div>
  //       `,
  //     },
  //     {
  //       path: '/tab2/',
  //       id: 'tab2',
  //       content: `
  //       <div class="block">
  //         <p>Tab 2 content</p>
  //         <p>Suscipit, facere quasi atque totam. Repudiandae facilis at optio atque, rem nam, natus ratione cum enim voluptatem suscipit veniam! Repellat, est debitis. Modi nam mollitia explicabo, unde aliquid impedit! Adipisci!</p>
  //         <p>Deserunt adipisci tempora asperiores, quo, nisi ex delectus vitae consectetur iste fugiat iusto dolorem autem. Itaque, ipsa voluptas, a assumenda rem, dolorum porro accusantium, officiis veniam nostrum cum cumque impedit.</p>
  //         <p>Laborum illum ipsa voluptatibus possimus nesciunt ex consequatur rem, natus ad praesentium rerum libero consectetur temporibus cupiditate atque aspernatur, eaque provident eligendi quaerat ea soluta doloremque. Iure fugit, minima facere.</p>
  //       </div>
  //       `,
  //     },
  //     {
  //       path: '/tab3/',
  //       id: 'tab3',
  //       content: `
  //       <div class="block">
  //         <p>Tab 3 content</p>
  //         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam enim quia molestiae facilis laudantium voluptates obcaecati officia cum, sit libero commodi. Ratione illo suscipit temporibus sequi iure ad laboriosam accusamus?</p>
  //         <p>Deserunt adipisci tempora asperiores, quo, nisi ex delectus vitae consectetur iste fugiat iusto dolorem autem. Itaque, ipsa voluptas, a assumenda rem, dolorum porro accusantium, officiis veniam nostrum cum cumque impedit.</p>
  //         <p>Laborum illum ipsa voluptatibus possimus nesciunt ex consequatur rem, natus ad praesentium rerum libero consectetur temporibus cupiditate atque aspernatur, eaque provident eligendi quaerat ea soluta doloremque. Iure fugit, minima facere.</p>
  //       </div>
  //       `,
  //     },
  //   ],
  // },
  // {
  //   path: '/toast/',
  //   component: Toast,
  // },
  // {
  //   path: '/toggle/',
  //   component: Toggle,
  // },
  // {
  //   path: '/toolbar-tabbar/',
  //   component: ToolbarTabbar,
  //   routes: [
  //     {
  //       path: 'tabbar/',
  //       component: Tabbar,
  //     },
  //     {
  //       path: 'tabbar-labels/',
  //       component: TabbarLabels,
  //     },
  //     {
  //       path: 'tabbar-scrollable/',
  //       component: TabbarScrollable,
  //     },
  //     {
  //       path: 'toolbar-hide-scroll/',
  //       component: ToolbarHideScroll,
  //     },
  //   ],
  // },
  // {
  //   path: '/tooltip/',
  //   component: Tooltip,
  // },
  // {
  //   path: '/timeline/',
  //   component: Timeline,
  // },
  // {
  //   path: '/timeline-vertical/',
  //   component: TimelineVertical,
  // },
  // {
  //   path: '/timeline-horizontal/',
  //   component: TimelineHorizontal,
  // },
  // {
  //   path: '/timeline-horizontal-calendar/',
  //   component: TimelineHorizontalCalendar,
  // },
  // {
  //   path: '/virtual-list/',
  //   component: VirtualList,
  // },

  // // Color Themes
  // {
  //   path: '/color-themes/',
  //   component: ColorThemes,
  // },

  // // Routable Modals
  // {
  //   path: '/routable-modals/',
  //   component: RoutableModals,
  //   routes: [
  //     {
  //       path: 'popup/',
  //       popup: {
  //         component: RoutablePopup,
  //       },
  //     },
  //     {
  //       path: 'actions/',
  //       popup: {
  //         component: RoutableActions,
  //       },
  //     },
  //   ],
  // },
  // {
  //   path: '/master-detail/',
  //   component: MasterDetailMaster,
  //   master: true,
  //   detailRoutes: [
  //     {
  //       path: '/master-detail/:id/',
  //       component: MasterDetailDetail,
  //     },
  //   ]
  // },

  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    component: NotFound,
  },
];