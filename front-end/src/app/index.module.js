import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { AboutController } from './About/about.controller';
import { ContactController } from './Contact/contact.controller';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { FooterDirective } from '../app/components/footer/footer.directive';


angular.module('frontEnd', ['ui.router', 'ui.bootstrap', 'toastr'])
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .controller('MainController', MainController)
  .controller('AboutController', AboutController)
  .controller('ContactController', ContactController)
  .directive('acmeNavbar', NavbarDirective)
  .directive('acmeFooter', FooterDirective)