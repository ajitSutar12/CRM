'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">crm documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/ActivityModule.html" data-type="entity-link" >ActivityModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ActivityMoniterModule.html" data-type="entity-link" >ActivityMoniterModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ActivityMoniterModule-814867747ec561cc47552786552bcca188982e1893e227760eae3820d0c77631b346cbeb62eeac03a8005f0e4f2d33e65dcebf751eec80c27b21c24b8a277748"' : 'data-target="#xs-controllers-links-module-ActivityMoniterModule-814867747ec561cc47552786552bcca188982e1893e227760eae3820d0c77631b346cbeb62eeac03a8005f0e4f2d33e65dcebf751eec80c27b21c24b8a277748"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ActivityMoniterModule-814867747ec561cc47552786552bcca188982e1893e227760eae3820d0c77631b346cbeb62eeac03a8005f0e4f2d33e65dcebf751eec80c27b21c24b8a277748"' :
                                            'id="xs-controllers-links-module-ActivityMoniterModule-814867747ec561cc47552786552bcca188982e1893e227760eae3820d0c77631b346cbeb62eeac03a8005f0e4f2d33e65dcebf751eec80c27b21c24b8a277748"' }>
                                            <li class="link">
                                                <a href="controllers/ActivityMoniterController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ActivityMoniterController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ActivityMoniterModule-814867747ec561cc47552786552bcca188982e1893e227760eae3820d0c77631b346cbeb62eeac03a8005f0e4f2d33e65dcebf751eec80c27b21c24b8a277748"' : 'data-target="#xs-injectables-links-module-ActivityMoniterModule-814867747ec561cc47552786552bcca188982e1893e227760eae3820d0c77631b346cbeb62eeac03a8005f0e4f2d33e65dcebf751eec80c27b21c24b8a277748"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ActivityMoniterModule-814867747ec561cc47552786552bcca188982e1893e227760eae3820d0c77631b346cbeb62eeac03a8005f0e4f2d33e65dcebf751eec80c27b21c24b8a277748"' :
                                        'id="xs-injectables-links-module-ActivityMoniterModule-814867747ec561cc47552786552bcca188982e1893e227760eae3820d0c77631b346cbeb62eeac03a8005f0e4f2d33e65dcebf751eec80c27b21c24b8a277748"' }>
                                        <li class="link">
                                            <a href="injectables/ActivityMoniterService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ActivityMoniterService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-97d03cd77fbe6874cce8fcbe0a3f0df9887c7d0628cde2a14ff011abfea50b8dbea031eaddf19f250d7f781f932b7de576823f670bf894e45041c1f150a2b23d"' : 'data-target="#xs-controllers-links-module-AppModule-97d03cd77fbe6874cce8fcbe0a3f0df9887c7d0628cde2a14ff011abfea50b8dbea031eaddf19f250d7f781f932b7de576823f670bf894e45041c1f150a2b23d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-97d03cd77fbe6874cce8fcbe0a3f0df9887c7d0628cde2a14ff011abfea50b8dbea031eaddf19f250d7f781f932b7de576823f670bf894e45041c1f150a2b23d"' :
                                            'id="xs-controllers-links-module-AppModule-97d03cd77fbe6874cce8fcbe0a3f0df9887c7d0628cde2a14ff011abfea50b8dbea031eaddf19f250d7f781f932b7de576823f670bf894e45041c1f150a2b23d"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-97d03cd77fbe6874cce8fcbe0a3f0df9887c7d0628cde2a14ff011abfea50b8dbea031eaddf19f250d7f781f932b7de576823f670bf894e45041c1f150a2b23d"' : 'data-target="#xs-injectables-links-module-AppModule-97d03cd77fbe6874cce8fcbe0a3f0df9887c7d0628cde2a14ff011abfea50b8dbea031eaddf19f250d7f781f932b7de576823f670bf894e45041c1f150a2b23d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-97d03cd77fbe6874cce8fcbe0a3f0df9887c7d0628cde2a14ff011abfea50b8dbea031eaddf19f250d7f781f932b7de576823f670bf894e45041c1f150a2b23d"' :
                                        'id="xs-injectables-links-module-AppModule-97d03cd77fbe6874cce8fcbe0a3f0df9887c7d0628cde2a14ff011abfea50b8dbea031eaddf19f250d7f781f932b7de576823f670bf894e45041c1f150a2b23d"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CallLogManagementModule.html" data-type="entity-link" >CallLogManagementModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-CallLogManagementModule-dee173b205b4617bd4b57d7c01d96fea7ae3817ee10ff6df799eabfd8dfb16cfbaba450bbee036507b0fd06304867ce9d34d852b496e406992a266cc203fb72e"' : 'data-target="#xs-controllers-links-module-CallLogManagementModule-dee173b205b4617bd4b57d7c01d96fea7ae3817ee10ff6df799eabfd8dfb16cfbaba450bbee036507b0fd06304867ce9d34d852b496e406992a266cc203fb72e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CallLogManagementModule-dee173b205b4617bd4b57d7c01d96fea7ae3817ee10ff6df799eabfd8dfb16cfbaba450bbee036507b0fd06304867ce9d34d852b496e406992a266cc203fb72e"' :
                                            'id="xs-controllers-links-module-CallLogManagementModule-dee173b205b4617bd4b57d7c01d96fea7ae3817ee10ff6df799eabfd8dfb16cfbaba450bbee036507b0fd06304867ce9d34d852b496e406992a266cc203fb72e"' }>
                                            <li class="link">
                                                <a href="controllers/CallLogManagementController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CallLogManagementController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CallLogManagementModule-dee173b205b4617bd4b57d7c01d96fea7ae3817ee10ff6df799eabfd8dfb16cfbaba450bbee036507b0fd06304867ce9d34d852b496e406992a266cc203fb72e"' : 'data-target="#xs-injectables-links-module-CallLogManagementModule-dee173b205b4617bd4b57d7c01d96fea7ae3817ee10ff6df799eabfd8dfb16cfbaba450bbee036507b0fd06304867ce9d34d852b496e406992a266cc203fb72e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CallLogManagementModule-dee173b205b4617bd4b57d7c01d96fea7ae3817ee10ff6df799eabfd8dfb16cfbaba450bbee036507b0fd06304867ce9d34d852b496e406992a266cc203fb72e"' :
                                        'id="xs-injectables-links-module-CallLogManagementModule-dee173b205b4617bd4b57d7c01d96fea7ae3817ee10ff6df799eabfd8dfb16cfbaba450bbee036507b0fd06304867ce9d34d852b496e406992a266cc203fb72e"' }>
                                        <li class="link">
                                            <a href="injectables/CallLogManagementService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CallLogManagementService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CallModule.html" data-type="entity-link" >CallModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CallStatusMasterModule.html" data-type="entity-link" >CallStatusMasterModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-CallStatusMasterModule-d32bb091f25d279300bb8ee5b6db294697207fee0f5ae1ee55745e456c73266800abd47838b6ee7e2f7b96e5bf3efe11ef1fcfe3aeef28d85c3d27088066bcbc"' : 'data-target="#xs-controllers-links-module-CallStatusMasterModule-d32bb091f25d279300bb8ee5b6db294697207fee0f5ae1ee55745e456c73266800abd47838b6ee7e2f7b96e5bf3efe11ef1fcfe3aeef28d85c3d27088066bcbc"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CallStatusMasterModule-d32bb091f25d279300bb8ee5b6db294697207fee0f5ae1ee55745e456c73266800abd47838b6ee7e2f7b96e5bf3efe11ef1fcfe3aeef28d85c3d27088066bcbc"' :
                                            'id="xs-controllers-links-module-CallStatusMasterModule-d32bb091f25d279300bb8ee5b6db294697207fee0f5ae1ee55745e456c73266800abd47838b6ee7e2f7b96e5bf3efe11ef1fcfe3aeef28d85c3d27088066bcbc"' }>
                                            <li class="link">
                                                <a href="controllers/CallStatusMasterController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CallStatusMasterController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CallStatusMasterModule-d32bb091f25d279300bb8ee5b6db294697207fee0f5ae1ee55745e456c73266800abd47838b6ee7e2f7b96e5bf3efe11ef1fcfe3aeef28d85c3d27088066bcbc"' : 'data-target="#xs-injectables-links-module-CallStatusMasterModule-d32bb091f25d279300bb8ee5b6db294697207fee0f5ae1ee55745e456c73266800abd47838b6ee7e2f7b96e5bf3efe11ef1fcfe3aeef28d85c3d27088066bcbc"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CallStatusMasterModule-d32bb091f25d279300bb8ee5b6db294697207fee0f5ae1ee55745e456c73266800abd47838b6ee7e2f7b96e5bf3efe11ef1fcfe3aeef28d85c3d27088066bcbc"' :
                                        'id="xs-injectables-links-module-CallStatusMasterModule-d32bb091f25d279300bb8ee5b6db294697207fee0f5ae1ee55745e456c73266800abd47838b6ee7e2f7b96e5bf3efe11ef1fcfe3aeef28d85c3d27088066bcbc"' }>
                                        <li class="link">
                                            <a href="injectables/CallStatusMasterService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CallStatusMasterService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CampaignMasterModule.html" data-type="entity-link" >CampaignMasterModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-CampaignMasterModule-b7137d08fdd47dbfc875094816617c413eef431f841b20f29a38a513750ae4963790bae932d8c9af6f4549863f6b59991a1da4fa0b68ae4913d861101eb1fede"' : 'data-target="#xs-controllers-links-module-CampaignMasterModule-b7137d08fdd47dbfc875094816617c413eef431f841b20f29a38a513750ae4963790bae932d8c9af6f4549863f6b59991a1da4fa0b68ae4913d861101eb1fede"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CampaignMasterModule-b7137d08fdd47dbfc875094816617c413eef431f841b20f29a38a513750ae4963790bae932d8c9af6f4549863f6b59991a1da4fa0b68ae4913d861101eb1fede"' :
                                            'id="xs-controllers-links-module-CampaignMasterModule-b7137d08fdd47dbfc875094816617c413eef431f841b20f29a38a513750ae4963790bae932d8c9af6f4549863f6b59991a1da4fa0b68ae4913d861101eb1fede"' }>
                                            <li class="link">
                                                <a href="controllers/CampaignMasterController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CampaignMasterController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CampaignMasterModule-b7137d08fdd47dbfc875094816617c413eef431f841b20f29a38a513750ae4963790bae932d8c9af6f4549863f6b59991a1da4fa0b68ae4913d861101eb1fede"' : 'data-target="#xs-injectables-links-module-CampaignMasterModule-b7137d08fdd47dbfc875094816617c413eef431f841b20f29a38a513750ae4963790bae932d8c9af6f4549863f6b59991a1da4fa0b68ae4913d861101eb1fede"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CampaignMasterModule-b7137d08fdd47dbfc875094816617c413eef431f841b20f29a38a513750ae4963790bae932d8c9af6f4549863f6b59991a1da4fa0b68ae4913d861101eb1fede"' :
                                        'id="xs-injectables-links-module-CampaignMasterModule-b7137d08fdd47dbfc875094816617c413eef431f841b20f29a38a513750ae4963790bae932d8c9af6f4549863f6b59991a1da4fa0b68ae4913d861101eb1fede"' }>
                                        <li class="link">
                                            <a href="injectables/CampaignMasterService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CampaignMasterService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CampaignModule.html" data-type="entity-link" >CampaignModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CampaignTypeMasterModule.html" data-type="entity-link" >CampaignTypeMasterModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-CampaignTypeMasterModule-51a793f9619d3066fa1af11f8de850899b000edaab2fe5e1519f2de9db678831def25f97d33b8733979cfac7dc28ac8a02aaa7c7362db7f1f5c9fe5b34557157"' : 'data-target="#xs-controllers-links-module-CampaignTypeMasterModule-51a793f9619d3066fa1af11f8de850899b000edaab2fe5e1519f2de9db678831def25f97d33b8733979cfac7dc28ac8a02aaa7c7362db7f1f5c9fe5b34557157"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CampaignTypeMasterModule-51a793f9619d3066fa1af11f8de850899b000edaab2fe5e1519f2de9db678831def25f97d33b8733979cfac7dc28ac8a02aaa7c7362db7f1f5c9fe5b34557157"' :
                                            'id="xs-controllers-links-module-CampaignTypeMasterModule-51a793f9619d3066fa1af11f8de850899b000edaab2fe5e1519f2de9db678831def25f97d33b8733979cfac7dc28ac8a02aaa7c7362db7f1f5c9fe5b34557157"' }>
                                            <li class="link">
                                                <a href="controllers/CampaignTypeMasterController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CampaignTypeMasterController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CampaignTypeMasterModule-51a793f9619d3066fa1af11f8de850899b000edaab2fe5e1519f2de9db678831def25f97d33b8733979cfac7dc28ac8a02aaa7c7362db7f1f5c9fe5b34557157"' : 'data-target="#xs-injectables-links-module-CampaignTypeMasterModule-51a793f9619d3066fa1af11f8de850899b000edaab2fe5e1519f2de9db678831def25f97d33b8733979cfac7dc28ac8a02aaa7c7362db7f1f5c9fe5b34557157"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CampaignTypeMasterModule-51a793f9619d3066fa1af11f8de850899b000edaab2fe5e1519f2de9db678831def25f97d33b8733979cfac7dc28ac8a02aaa7c7362db7f1f5c9fe5b34557157"' :
                                        'id="xs-injectables-links-module-CampaignTypeMasterModule-51a793f9619d3066fa1af11f8de850899b000edaab2fe5e1519f2de9db678831def25f97d33b8733979cfac7dc28ac8a02aaa7c7362db7f1f5c9fe5b34557157"' }>
                                        <li class="link">
                                            <a href="injectables/CampaignTypeMasterService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CampaignTypeMasterService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CompanyMasterModule.html" data-type="entity-link" >CompanyMasterModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-CompanyMasterModule-155956b26842f064b3806b67af42bdb185fffe0a2f827c77152b1c51bf0d67de1b2bf8af4a14c05b6859616e10ecf96bc355d1d1320a62ca057a31092509a684"' : 'data-target="#xs-controllers-links-module-CompanyMasterModule-155956b26842f064b3806b67af42bdb185fffe0a2f827c77152b1c51bf0d67de1b2bf8af4a14c05b6859616e10ecf96bc355d1d1320a62ca057a31092509a684"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CompanyMasterModule-155956b26842f064b3806b67af42bdb185fffe0a2f827c77152b1c51bf0d67de1b2bf8af4a14c05b6859616e10ecf96bc355d1d1320a62ca057a31092509a684"' :
                                            'id="xs-controllers-links-module-CompanyMasterModule-155956b26842f064b3806b67af42bdb185fffe0a2f827c77152b1c51bf0d67de1b2bf8af4a14c05b6859616e10ecf96bc355d1d1320a62ca057a31092509a684"' }>
                                            <li class="link">
                                                <a href="controllers/CompanyMasterController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CompanyMasterController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CompanyMasterModule-155956b26842f064b3806b67af42bdb185fffe0a2f827c77152b1c51bf0d67de1b2bf8af4a14c05b6859616e10ecf96bc355d1d1320a62ca057a31092509a684"' : 'data-target="#xs-injectables-links-module-CompanyMasterModule-155956b26842f064b3806b67af42bdb185fffe0a2f827c77152b1c51bf0d67de1b2bf8af4a14c05b6859616e10ecf96bc355d1d1320a62ca057a31092509a684"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CompanyMasterModule-155956b26842f064b3806b67af42bdb185fffe0a2f827c77152b1c51bf0d67de1b2bf8af4a14c05b6859616e10ecf96bc355d1d1320a62ca057a31092509a684"' :
                                        'id="xs-injectables-links-module-CompanyMasterModule-155956b26842f064b3806b67af42bdb185fffe0a2f827c77152b1c51bf0d67de1b2bf8af4a14c05b6859616e10ecf96bc355d1d1320a62ca057a31092509a684"' }>
                                        <li class="link">
                                            <a href="injectables/CompanyMasterService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CompanyMasterService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ContactCampaignMappingModule.html" data-type="entity-link" >ContactCampaignMappingModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ContactCampaignMappingModule-62d78a3c183cadc1078e72140ae70f58df4efa59d11a52dc8b978fd007d15b31acffc040c748e6f8b439fa82f1f0d134c2c5897af32ded09f17db5d29f3253ce"' : 'data-target="#xs-controllers-links-module-ContactCampaignMappingModule-62d78a3c183cadc1078e72140ae70f58df4efa59d11a52dc8b978fd007d15b31acffc040c748e6f8b439fa82f1f0d134c2c5897af32ded09f17db5d29f3253ce"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ContactCampaignMappingModule-62d78a3c183cadc1078e72140ae70f58df4efa59d11a52dc8b978fd007d15b31acffc040c748e6f8b439fa82f1f0d134c2c5897af32ded09f17db5d29f3253ce"' :
                                            'id="xs-controllers-links-module-ContactCampaignMappingModule-62d78a3c183cadc1078e72140ae70f58df4efa59d11a52dc8b978fd007d15b31acffc040c748e6f8b439fa82f1f0d134c2c5897af32ded09f17db5d29f3253ce"' }>
                                            <li class="link">
                                                <a href="controllers/ContactCampaignMappingController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactCampaignMappingController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ContactCampaignMappingModule-62d78a3c183cadc1078e72140ae70f58df4efa59d11a52dc8b978fd007d15b31acffc040c748e6f8b439fa82f1f0d134c2c5897af32ded09f17db5d29f3253ce"' : 'data-target="#xs-injectables-links-module-ContactCampaignMappingModule-62d78a3c183cadc1078e72140ae70f58df4efa59d11a52dc8b978fd007d15b31acffc040c748e6f8b439fa82f1f0d134c2c5897af32ded09f17db5d29f3253ce"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ContactCampaignMappingModule-62d78a3c183cadc1078e72140ae70f58df4efa59d11a52dc8b978fd007d15b31acffc040c748e6f8b439fa82f1f0d134c2c5897af32ded09f17db5d29f3253ce"' :
                                        'id="xs-injectables-links-module-ContactCampaignMappingModule-62d78a3c183cadc1078e72140ae70f58df4efa59d11a52dc8b978fd007d15b31acffc040c748e6f8b439fa82f1f0d134c2c5897af32ded09f17db5d29f3253ce"' }>
                                        <li class="link">
                                            <a href="injectables/ContactCampaignMappingService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactCampaignMappingService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ContactDocumentMasterModule.html" data-type="entity-link" >ContactDocumentMasterModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ContactDocumentMasterModule-8b21dc53b011e0f50f095e99f3cd7fad01aa3df9c0491a3471706999e8ed9be305df4d741055bac134662016feadda17f9836f91f09064d273e37cd7e72fd827"' : 'data-target="#xs-controllers-links-module-ContactDocumentMasterModule-8b21dc53b011e0f50f095e99f3cd7fad01aa3df9c0491a3471706999e8ed9be305df4d741055bac134662016feadda17f9836f91f09064d273e37cd7e72fd827"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ContactDocumentMasterModule-8b21dc53b011e0f50f095e99f3cd7fad01aa3df9c0491a3471706999e8ed9be305df4d741055bac134662016feadda17f9836f91f09064d273e37cd7e72fd827"' :
                                            'id="xs-controllers-links-module-ContactDocumentMasterModule-8b21dc53b011e0f50f095e99f3cd7fad01aa3df9c0491a3471706999e8ed9be305df4d741055bac134662016feadda17f9836f91f09064d273e37cd7e72fd827"' }>
                                            <li class="link">
                                                <a href="controllers/ContactDocumentMasterController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactDocumentMasterController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ContactDocumentMasterModule-8b21dc53b011e0f50f095e99f3cd7fad01aa3df9c0491a3471706999e8ed9be305df4d741055bac134662016feadda17f9836f91f09064d273e37cd7e72fd827"' : 'data-target="#xs-injectables-links-module-ContactDocumentMasterModule-8b21dc53b011e0f50f095e99f3cd7fad01aa3df9c0491a3471706999e8ed9be305df4d741055bac134662016feadda17f9836f91f09064d273e37cd7e72fd827"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ContactDocumentMasterModule-8b21dc53b011e0f50f095e99f3cd7fad01aa3df9c0491a3471706999e8ed9be305df4d741055bac134662016feadda17f9836f91f09064d273e37cd7e72fd827"' :
                                        'id="xs-injectables-links-module-ContactDocumentMasterModule-8b21dc53b011e0f50f095e99f3cd7fad01aa3df9c0491a3471706999e8ed9be305df4d741055bac134662016feadda17f9836f91f09064d273e37cd7e72fd827"' }>
                                        <li class="link">
                                            <a href="injectables/ContactDocumentMasterService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactDocumentMasterService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ContactEmailMappingAttachmentModule.html" data-type="entity-link" >ContactEmailMappingAttachmentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ContactEmailMappingAttachmentModule-ad8f966711b53be5140941816eba4ab13b86109e79673188c84dee3da8f54857537b5e9d69cdc98c178069a2f417b46dac4e5fe8ad8258943519396875b2322c"' : 'data-target="#xs-controllers-links-module-ContactEmailMappingAttachmentModule-ad8f966711b53be5140941816eba4ab13b86109e79673188c84dee3da8f54857537b5e9d69cdc98c178069a2f417b46dac4e5fe8ad8258943519396875b2322c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ContactEmailMappingAttachmentModule-ad8f966711b53be5140941816eba4ab13b86109e79673188c84dee3da8f54857537b5e9d69cdc98c178069a2f417b46dac4e5fe8ad8258943519396875b2322c"' :
                                            'id="xs-controllers-links-module-ContactEmailMappingAttachmentModule-ad8f966711b53be5140941816eba4ab13b86109e79673188c84dee3da8f54857537b5e9d69cdc98c178069a2f417b46dac4e5fe8ad8258943519396875b2322c"' }>
                                            <li class="link">
                                                <a href="controllers/ContactEmailMappingAttachmentController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactEmailMappingAttachmentController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ContactEmailMappingAttachmentModule-ad8f966711b53be5140941816eba4ab13b86109e79673188c84dee3da8f54857537b5e9d69cdc98c178069a2f417b46dac4e5fe8ad8258943519396875b2322c"' : 'data-target="#xs-injectables-links-module-ContactEmailMappingAttachmentModule-ad8f966711b53be5140941816eba4ab13b86109e79673188c84dee3da8f54857537b5e9d69cdc98c178069a2f417b46dac4e5fe8ad8258943519396875b2322c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ContactEmailMappingAttachmentModule-ad8f966711b53be5140941816eba4ab13b86109e79673188c84dee3da8f54857537b5e9d69cdc98c178069a2f417b46dac4e5fe8ad8258943519396875b2322c"' :
                                        'id="xs-injectables-links-module-ContactEmailMappingAttachmentModule-ad8f966711b53be5140941816eba4ab13b86109e79673188c84dee3da8f54857537b5e9d69cdc98c178069a2f417b46dac4e5fe8ad8258943519396875b2322c"' }>
                                        <li class="link">
                                            <a href="injectables/ContactEmailMappingAttachmentService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactEmailMappingAttachmentService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ContactEmailMappingModule.html" data-type="entity-link" >ContactEmailMappingModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ContactEmailMappingModule-1405504997ae05fe5d4318ac485b77813b75fce28d46587fce0812d22db382b0d5fc6425825f9685e096a5c1073316853114e088e608f510a0e1ec0a05c00561"' : 'data-target="#xs-controllers-links-module-ContactEmailMappingModule-1405504997ae05fe5d4318ac485b77813b75fce28d46587fce0812d22db382b0d5fc6425825f9685e096a5c1073316853114e088e608f510a0e1ec0a05c00561"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ContactEmailMappingModule-1405504997ae05fe5d4318ac485b77813b75fce28d46587fce0812d22db382b0d5fc6425825f9685e096a5c1073316853114e088e608f510a0e1ec0a05c00561"' :
                                            'id="xs-controllers-links-module-ContactEmailMappingModule-1405504997ae05fe5d4318ac485b77813b75fce28d46587fce0812d22db382b0d5fc6425825f9685e096a5c1073316853114e088e608f510a0e1ec0a05c00561"' }>
                                            <li class="link">
                                                <a href="controllers/ContactEmailMappingController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactEmailMappingController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ContactEmailMappingModule-1405504997ae05fe5d4318ac485b77813b75fce28d46587fce0812d22db382b0d5fc6425825f9685e096a5c1073316853114e088e608f510a0e1ec0a05c00561"' : 'data-target="#xs-injectables-links-module-ContactEmailMappingModule-1405504997ae05fe5d4318ac485b77813b75fce28d46587fce0812d22db382b0d5fc6425825f9685e096a5c1073316853114e088e608f510a0e1ec0a05c00561"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ContactEmailMappingModule-1405504997ae05fe5d4318ac485b77813b75fce28d46587fce0812d22db382b0d5fc6425825f9685e096a5c1073316853114e088e608f510a0e1ec0a05c00561"' :
                                        'id="xs-injectables-links-module-ContactEmailMappingModule-1405504997ae05fe5d4318ac485b77813b75fce28d46587fce0812d22db382b0d5fc6425825f9685e096a5c1073316853114e088e608f510a0e1ec0a05c00561"' }>
                                        <li class="link">
                                            <a href="injectables/ContactEmailMappingService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactEmailMappingService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ContactEmailModule.html" data-type="entity-link" >ContactEmailModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ContactMasterModule.html" data-type="entity-link" >ContactMasterModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ContactMasterModule-b8ebf1208abd2083e85890ec93c4d3fb7ffdd9929ccf8dc30f32a565418392a35eb39b84d5963565e417ebae590646cfb816530bfa1e6d12e64987b771d75e4f"' : 'data-target="#xs-controllers-links-module-ContactMasterModule-b8ebf1208abd2083e85890ec93c4d3fb7ffdd9929ccf8dc30f32a565418392a35eb39b84d5963565e417ebae590646cfb816530bfa1e6d12e64987b771d75e4f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ContactMasterModule-b8ebf1208abd2083e85890ec93c4d3fb7ffdd9929ccf8dc30f32a565418392a35eb39b84d5963565e417ebae590646cfb816530bfa1e6d12e64987b771d75e4f"' :
                                            'id="xs-controllers-links-module-ContactMasterModule-b8ebf1208abd2083e85890ec93c4d3fb7ffdd9929ccf8dc30f32a565418392a35eb39b84d5963565e417ebae590646cfb816530bfa1e6d12e64987b771d75e4f"' }>
                                            <li class="link">
                                                <a href="controllers/ContactMasterController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactMasterController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ContactMasterModule-b8ebf1208abd2083e85890ec93c4d3fb7ffdd9929ccf8dc30f32a565418392a35eb39b84d5963565e417ebae590646cfb816530bfa1e6d12e64987b771d75e4f"' : 'data-target="#xs-injectables-links-module-ContactMasterModule-b8ebf1208abd2083e85890ec93c4d3fb7ffdd9929ccf8dc30f32a565418392a35eb39b84d5963565e417ebae590646cfb816530bfa1e6d12e64987b771d75e4f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ContactMasterModule-b8ebf1208abd2083e85890ec93c4d3fb7ffdd9929ccf8dc30f32a565418392a35eb39b84d5963565e417ebae590646cfb816530bfa1e6d12e64987b771d75e4f"' :
                                        'id="xs-injectables-links-module-ContactMasterModule-b8ebf1208abd2083e85890ec93c4d3fb7ffdd9929ccf8dc30f32a565418392a35eb39b84d5963565e417ebae590646cfb816530bfa1e6d12e64987b771d75e4f"' }>
                                        <li class="link">
                                            <a href="injectables/ContactMasterService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactMasterService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ContactModule.html" data-type="entity-link" >ContactModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ContactVisitMasterModule.html" data-type="entity-link" >ContactVisitMasterModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ContactVisitMasterModule-6bb34029aa0f42a0d9c752f952dd9e1fb601d69824ae5bde45256781f6b94f14e1695a4bf84b968601e295cb6399890229cd529ce9bacc6c151f1e1776bb8015"' : 'data-target="#xs-controllers-links-module-ContactVisitMasterModule-6bb34029aa0f42a0d9c752f952dd9e1fb601d69824ae5bde45256781f6b94f14e1695a4bf84b968601e295cb6399890229cd529ce9bacc6c151f1e1776bb8015"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ContactVisitMasterModule-6bb34029aa0f42a0d9c752f952dd9e1fb601d69824ae5bde45256781f6b94f14e1695a4bf84b968601e295cb6399890229cd529ce9bacc6c151f1e1776bb8015"' :
                                            'id="xs-controllers-links-module-ContactVisitMasterModule-6bb34029aa0f42a0d9c752f952dd9e1fb601d69824ae5bde45256781f6b94f14e1695a4bf84b968601e295cb6399890229cd529ce9bacc6c151f1e1776bb8015"' }>
                                            <li class="link">
                                                <a href="controllers/ContactVisitMasterController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactVisitMasterController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ContactVisitMasterModule-6bb34029aa0f42a0d9c752f952dd9e1fb601d69824ae5bde45256781f6b94f14e1695a4bf84b968601e295cb6399890229cd529ce9bacc6c151f1e1776bb8015"' : 'data-target="#xs-injectables-links-module-ContactVisitMasterModule-6bb34029aa0f42a0d9c752f952dd9e1fb601d69824ae5bde45256781f6b94f14e1695a4bf84b968601e295cb6399890229cd529ce9bacc6c151f1e1776bb8015"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ContactVisitMasterModule-6bb34029aa0f42a0d9c752f952dd9e1fb601d69824ae5bde45256781f6b94f14e1695a4bf84b968601e295cb6399890229cd529ce9bacc6c151f1e1776bb8015"' :
                                        'id="xs-injectables-links-module-ContactVisitMasterModule-6bb34029aa0f42a0d9c752f952dd9e1fb601d69824ae5bde45256781f6b94f14e1695a4bf84b968601e295cb6399890229cd529ce9bacc6c151f1e1776bb8015"' }>
                                        <li class="link">
                                            <a href="injectables/ContactVisitMasterService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactVisitMasterService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DealAttachmentModule.html" data-type="entity-link" >DealAttachmentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-DealAttachmentModule-9ce3b556c051e4bcdfe2aa442a4371d9c9785cc5c72c07f12842a90a3341c84301ea3da6bef50c64621a12fa6c3e6b950e76421810c2e40c5376657b02e37cdf"' : 'data-target="#xs-controllers-links-module-DealAttachmentModule-9ce3b556c051e4bcdfe2aa442a4371d9c9785cc5c72c07f12842a90a3341c84301ea3da6bef50c64621a12fa6c3e6b950e76421810c2e40c5376657b02e37cdf"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-DealAttachmentModule-9ce3b556c051e4bcdfe2aa442a4371d9c9785cc5c72c07f12842a90a3341c84301ea3da6bef50c64621a12fa6c3e6b950e76421810c2e40c5376657b02e37cdf"' :
                                            'id="xs-controllers-links-module-DealAttachmentModule-9ce3b556c051e4bcdfe2aa442a4371d9c9785cc5c72c07f12842a90a3341c84301ea3da6bef50c64621a12fa6c3e6b950e76421810c2e40c5376657b02e37cdf"' }>
                                            <li class="link">
                                                <a href="controllers/DealAttachmentController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DealAttachmentController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-DealAttachmentModule-9ce3b556c051e4bcdfe2aa442a4371d9c9785cc5c72c07f12842a90a3341c84301ea3da6bef50c64621a12fa6c3e6b950e76421810c2e40c5376657b02e37cdf"' : 'data-target="#xs-injectables-links-module-DealAttachmentModule-9ce3b556c051e4bcdfe2aa442a4371d9c9785cc5c72c07f12842a90a3341c84301ea3da6bef50c64621a12fa6c3e6b950e76421810c2e40c5376657b02e37cdf"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DealAttachmentModule-9ce3b556c051e4bcdfe2aa442a4371d9c9785cc5c72c07f12842a90a3341c84301ea3da6bef50c64621a12fa6c3e6b950e76421810c2e40c5376657b02e37cdf"' :
                                        'id="xs-injectables-links-module-DealAttachmentModule-9ce3b556c051e4bcdfe2aa442a4371d9c9785cc5c72c07f12842a90a3341c84301ea3da6bef50c64621a12fa6c3e6b950e76421810c2e40c5376657b02e37cdf"' }>
                                        <li class="link">
                                            <a href="injectables/DealAttachmentService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DealAttachmentService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DealMasterMilestoneMappingModule.html" data-type="entity-link" >DealMasterMilestoneMappingModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-DealMasterMilestoneMappingModule-8e4fb87e367756491789cde0799892f0e0edeee86b3596f6361f55850c6e7eb7bce5bde92c77bb961b8b86347dc668c37ed9a7e99dc1e4834f2cd2514fb5f939"' : 'data-target="#xs-controllers-links-module-DealMasterMilestoneMappingModule-8e4fb87e367756491789cde0799892f0e0edeee86b3596f6361f55850c6e7eb7bce5bde92c77bb961b8b86347dc668c37ed9a7e99dc1e4834f2cd2514fb5f939"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-DealMasterMilestoneMappingModule-8e4fb87e367756491789cde0799892f0e0edeee86b3596f6361f55850c6e7eb7bce5bde92c77bb961b8b86347dc668c37ed9a7e99dc1e4834f2cd2514fb5f939"' :
                                            'id="xs-controllers-links-module-DealMasterMilestoneMappingModule-8e4fb87e367756491789cde0799892f0e0edeee86b3596f6361f55850c6e7eb7bce5bde92c77bb961b8b86347dc668c37ed9a7e99dc1e4834f2cd2514fb5f939"' }>
                                            <li class="link">
                                                <a href="controllers/DealMasterMilestoneMappingController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DealMasterMilestoneMappingController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-DealMasterMilestoneMappingModule-8e4fb87e367756491789cde0799892f0e0edeee86b3596f6361f55850c6e7eb7bce5bde92c77bb961b8b86347dc668c37ed9a7e99dc1e4834f2cd2514fb5f939"' : 'data-target="#xs-injectables-links-module-DealMasterMilestoneMappingModule-8e4fb87e367756491789cde0799892f0e0edeee86b3596f6361f55850c6e7eb7bce5bde92c77bb961b8b86347dc668c37ed9a7e99dc1e4834f2cd2514fb5f939"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DealMasterMilestoneMappingModule-8e4fb87e367756491789cde0799892f0e0edeee86b3596f6361f55850c6e7eb7bce5bde92c77bb961b8b86347dc668c37ed9a7e99dc1e4834f2cd2514fb5f939"' :
                                        'id="xs-injectables-links-module-DealMasterMilestoneMappingModule-8e4fb87e367756491789cde0799892f0e0edeee86b3596f6361f55850c6e7eb7bce5bde92c77bb961b8b86347dc668c37ed9a7e99dc1e4834f2cd2514fb5f939"' }>
                                        <li class="link">
                                            <a href="injectables/DealMasterMilestoneMappingService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DealMasterMilestoneMappingService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DealMasterModule.html" data-type="entity-link" >DealMasterModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-DealMasterModule-735b44ea5a949c79c513e3cdea997c2ce3515867e147c1e4efdf22054cb6249ff90edd36c4b19aba718f03d1dc45911b89337db148db39fd6f7164fbf1a2c1dc"' : 'data-target="#xs-controllers-links-module-DealMasterModule-735b44ea5a949c79c513e3cdea997c2ce3515867e147c1e4efdf22054cb6249ff90edd36c4b19aba718f03d1dc45911b89337db148db39fd6f7164fbf1a2c1dc"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-DealMasterModule-735b44ea5a949c79c513e3cdea997c2ce3515867e147c1e4efdf22054cb6249ff90edd36c4b19aba718f03d1dc45911b89337db148db39fd6f7164fbf1a2c1dc"' :
                                            'id="xs-controllers-links-module-DealMasterModule-735b44ea5a949c79c513e3cdea997c2ce3515867e147c1e4efdf22054cb6249ff90edd36c4b19aba718f03d1dc45911b89337db148db39fd6f7164fbf1a2c1dc"' }>
                                            <li class="link">
                                                <a href="controllers/DealMasterController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DealMasterController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-DealMasterModule-735b44ea5a949c79c513e3cdea997c2ce3515867e147c1e4efdf22054cb6249ff90edd36c4b19aba718f03d1dc45911b89337db148db39fd6f7164fbf1a2c1dc"' : 'data-target="#xs-injectables-links-module-DealMasterModule-735b44ea5a949c79c513e3cdea997c2ce3515867e147c1e4efdf22054cb6249ff90edd36c4b19aba718f03d1dc45911b89337db148db39fd6f7164fbf1a2c1dc"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DealMasterModule-735b44ea5a949c79c513e3cdea997c2ce3515867e147c1e4efdf22054cb6249ff90edd36c4b19aba718f03d1dc45911b89337db148db39fd6f7164fbf1a2c1dc"' :
                                        'id="xs-injectables-links-module-DealMasterModule-735b44ea5a949c79c513e3cdea997c2ce3515867e147c1e4efdf22054cb6249ff90edd36c4b19aba718f03d1dc45911b89337db148db39fd6f7164fbf1a2c1dc"' }>
                                        <li class="link">
                                            <a href="injectables/DealMasterService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DealMasterService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DealMasterProductMappingModule.html" data-type="entity-link" >DealMasterProductMappingModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-DealMasterProductMappingModule-aecc62d2e3ae72247bf89a7e728e6bc05f46b818ecb1d830b0fd611f3c2000e3827aae01c7f671855fad45b7a1def72c8c97de0a0b36a837c3cd7c5710876547"' : 'data-target="#xs-controllers-links-module-DealMasterProductMappingModule-aecc62d2e3ae72247bf89a7e728e6bc05f46b818ecb1d830b0fd611f3c2000e3827aae01c7f671855fad45b7a1def72c8c97de0a0b36a837c3cd7c5710876547"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-DealMasterProductMappingModule-aecc62d2e3ae72247bf89a7e728e6bc05f46b818ecb1d830b0fd611f3c2000e3827aae01c7f671855fad45b7a1def72c8c97de0a0b36a837c3cd7c5710876547"' :
                                            'id="xs-controllers-links-module-DealMasterProductMappingModule-aecc62d2e3ae72247bf89a7e728e6bc05f46b818ecb1d830b0fd611f3c2000e3827aae01c7f671855fad45b7a1def72c8c97de0a0b36a837c3cd7c5710876547"' }>
                                            <li class="link">
                                                <a href="controllers/DealMasterProductMappingController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DealMasterProductMappingController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-DealMasterProductMappingModule-aecc62d2e3ae72247bf89a7e728e6bc05f46b818ecb1d830b0fd611f3c2000e3827aae01c7f671855fad45b7a1def72c8c97de0a0b36a837c3cd7c5710876547"' : 'data-target="#xs-injectables-links-module-DealMasterProductMappingModule-aecc62d2e3ae72247bf89a7e728e6bc05f46b818ecb1d830b0fd611f3c2000e3827aae01c7f671855fad45b7a1def72c8c97de0a0b36a837c3cd7c5710876547"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DealMasterProductMappingModule-aecc62d2e3ae72247bf89a7e728e6bc05f46b818ecb1d830b0fd611f3c2000e3827aae01c7f671855fad45b7a1def72c8c97de0a0b36a837c3cd7c5710876547"' :
                                        'id="xs-injectables-links-module-DealMasterProductMappingModule-aecc62d2e3ae72247bf89a7e728e6bc05f46b818ecb1d830b0fd611f3c2000e3827aae01c7f671855fad45b7a1def72c8c97de0a0b36a837c3cd7c5710876547"' }>
                                        <li class="link">
                                            <a href="injectables/DealMasterProductMappingService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DealMasterProductMappingService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DealMilestoneMasterModule.html" data-type="entity-link" >DealMilestoneMasterModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-DealMilestoneMasterModule-7aecf25632d6b0cbaceb238ce0f4b2a286cbaf9d6057dccfaf1e68b6d4baf08cc1ccc83203c66f260a9af181bf6aaf9ff3ba46ee623fd437375c4853968ddaa3"' : 'data-target="#xs-controllers-links-module-DealMilestoneMasterModule-7aecf25632d6b0cbaceb238ce0f4b2a286cbaf9d6057dccfaf1e68b6d4baf08cc1ccc83203c66f260a9af181bf6aaf9ff3ba46ee623fd437375c4853968ddaa3"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-DealMilestoneMasterModule-7aecf25632d6b0cbaceb238ce0f4b2a286cbaf9d6057dccfaf1e68b6d4baf08cc1ccc83203c66f260a9af181bf6aaf9ff3ba46ee623fd437375c4853968ddaa3"' :
                                            'id="xs-controllers-links-module-DealMilestoneMasterModule-7aecf25632d6b0cbaceb238ce0f4b2a286cbaf9d6057dccfaf1e68b6d4baf08cc1ccc83203c66f260a9af181bf6aaf9ff3ba46ee623fd437375c4853968ddaa3"' }>
                                            <li class="link">
                                                <a href="controllers/DealMilestoneMasterController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DealMilestoneMasterController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-DealMilestoneMasterModule-7aecf25632d6b0cbaceb238ce0f4b2a286cbaf9d6057dccfaf1e68b6d4baf08cc1ccc83203c66f260a9af181bf6aaf9ff3ba46ee623fd437375c4853968ddaa3"' : 'data-target="#xs-injectables-links-module-DealMilestoneMasterModule-7aecf25632d6b0cbaceb238ce0f4b2a286cbaf9d6057dccfaf1e68b6d4baf08cc1ccc83203c66f260a9af181bf6aaf9ff3ba46ee623fd437375c4853968ddaa3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DealMilestoneMasterModule-7aecf25632d6b0cbaceb238ce0f4b2a286cbaf9d6057dccfaf1e68b6d4baf08cc1ccc83203c66f260a9af181bf6aaf9ff3ba46ee623fd437375c4853968ddaa3"' :
                                        'id="xs-injectables-links-module-DealMilestoneMasterModule-7aecf25632d6b0cbaceb238ce0f4b2a286cbaf9d6057dccfaf1e68b6d4baf08cc1ccc83203c66f260a9af181bf6aaf9ff3ba46ee623fd437375c4853968ddaa3"' }>
                                        <li class="link">
                                            <a href="injectables/DealMilestoneMasterService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DealMilestoneMasterService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DealModule.html" data-type="entity-link" >DealModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DocumentMasterModule.html" data-type="entity-link" >DocumentMasterModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-DocumentMasterModule-4d431a74aa40880461d36881c7ce15789e601d9c6f8b728de1e39de7a41a522e7fb1b0e70531e33cd7b5fcca9f7a762d5100967159847a629e6777966c5eaf16"' : 'data-target="#xs-controllers-links-module-DocumentMasterModule-4d431a74aa40880461d36881c7ce15789e601d9c6f8b728de1e39de7a41a522e7fb1b0e70531e33cd7b5fcca9f7a762d5100967159847a629e6777966c5eaf16"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-DocumentMasterModule-4d431a74aa40880461d36881c7ce15789e601d9c6f8b728de1e39de7a41a522e7fb1b0e70531e33cd7b5fcca9f7a762d5100967159847a629e6777966c5eaf16"' :
                                            'id="xs-controllers-links-module-DocumentMasterModule-4d431a74aa40880461d36881c7ce15789e601d9c6f8b728de1e39de7a41a522e7fb1b0e70531e33cd7b5fcca9f7a762d5100967159847a629e6777966c5eaf16"' }>
                                            <li class="link">
                                                <a href="controllers/DocumentMasterController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DocumentMasterController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-DocumentMasterModule-4d431a74aa40880461d36881c7ce15789e601d9c6f8b728de1e39de7a41a522e7fb1b0e70531e33cd7b5fcca9f7a762d5100967159847a629e6777966c5eaf16"' : 'data-target="#xs-injectables-links-module-DocumentMasterModule-4d431a74aa40880461d36881c7ce15789e601d9c6f8b728de1e39de7a41a522e7fb1b0e70531e33cd7b5fcca9f7a762d5100967159847a629e6777966c5eaf16"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DocumentMasterModule-4d431a74aa40880461d36881c7ce15789e601d9c6f8b728de1e39de7a41a522e7fb1b0e70531e33cd7b5fcca9f7a762d5100967159847a629e6777966c5eaf16"' :
                                        'id="xs-injectables-links-module-DocumentMasterModule-4d431a74aa40880461d36881c7ce15789e601d9c6f8b728de1e39de7a41a522e7fb1b0e70531e33cd7b5fcca9f7a762d5100967159847a629e6777966c5eaf16"' }>
                                        <li class="link">
                                            <a href="injectables/DocumentMasterService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DocumentMasterService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/EventMasterModule.html" data-type="entity-link" >EventMasterModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-EventMasterModule-f49058648af9bb097b30ed08678fcd445129f080df250ea8f6442198b2472333d47d534ab6d5f561022af159d7bfd198b941b42225fbc92b8a75059936719a93"' : 'data-target="#xs-controllers-links-module-EventMasterModule-f49058648af9bb097b30ed08678fcd445129f080df250ea8f6442198b2472333d47d534ab6d5f561022af159d7bfd198b941b42225fbc92b8a75059936719a93"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-EventMasterModule-f49058648af9bb097b30ed08678fcd445129f080df250ea8f6442198b2472333d47d534ab6d5f561022af159d7bfd198b941b42225fbc92b8a75059936719a93"' :
                                            'id="xs-controllers-links-module-EventMasterModule-f49058648af9bb097b30ed08678fcd445129f080df250ea8f6442198b2472333d47d534ab6d5f561022af159d7bfd198b941b42225fbc92b8a75059936719a93"' }>
                                            <li class="link">
                                                <a href="controllers/EventMasterController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EventMasterController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-EventMasterModule-f49058648af9bb097b30ed08678fcd445129f080df250ea8f6442198b2472333d47d534ab6d5f561022af159d7bfd198b941b42225fbc92b8a75059936719a93"' : 'data-target="#xs-injectables-links-module-EventMasterModule-f49058648af9bb097b30ed08678fcd445129f080df250ea8f6442198b2472333d47d534ab6d5f561022af159d7bfd198b941b42225fbc92b8a75059936719a93"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-EventMasterModule-f49058648af9bb097b30ed08678fcd445129f080df250ea8f6442198b2472333d47d534ab6d5f561022af159d7bfd198b941b42225fbc92b8a75059936719a93"' :
                                        'id="xs-injectables-links-module-EventMasterModule-f49058648af9bb097b30ed08678fcd445129f080df250ea8f6442198b2472333d47d534ab6d5f561022af159d7bfd198b941b42225fbc92b8a75059936719a93"' }>
                                        <li class="link">
                                            <a href="injectables/EventMasterService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EventMasterService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/EventModule.html" data-type="entity-link" >EventModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/EventRelatedMasterModule.html" data-type="entity-link" >EventRelatedMasterModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-EventRelatedMasterModule-0ff5562de9527194aeedd82d9f1f63efda34905ec669a7fdaa67b6a4a5bc0c1b5a1de293337bb77254a7cc6f709c5f62bcc761c2c337dfb09f4cb33c38b649cf"' : 'data-target="#xs-controllers-links-module-EventRelatedMasterModule-0ff5562de9527194aeedd82d9f1f63efda34905ec669a7fdaa67b6a4a5bc0c1b5a1de293337bb77254a7cc6f709c5f62bcc761c2c337dfb09f4cb33c38b649cf"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-EventRelatedMasterModule-0ff5562de9527194aeedd82d9f1f63efda34905ec669a7fdaa67b6a4a5bc0c1b5a1de293337bb77254a7cc6f709c5f62bcc761c2c337dfb09f4cb33c38b649cf"' :
                                            'id="xs-controllers-links-module-EventRelatedMasterModule-0ff5562de9527194aeedd82d9f1f63efda34905ec669a7fdaa67b6a4a5bc0c1b5a1de293337bb77254a7cc6f709c5f62bcc761c2c337dfb09f4cb33c38b649cf"' }>
                                            <li class="link">
                                                <a href="controllers/EventRelatedMasterController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EventRelatedMasterController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-EventRelatedMasterModule-0ff5562de9527194aeedd82d9f1f63efda34905ec669a7fdaa67b6a4a5bc0c1b5a1de293337bb77254a7cc6f709c5f62bcc761c2c337dfb09f4cb33c38b649cf"' : 'data-target="#xs-injectables-links-module-EventRelatedMasterModule-0ff5562de9527194aeedd82d9f1f63efda34905ec669a7fdaa67b6a4a5bc0c1b5a1de293337bb77254a7cc6f709c5f62bcc761c2c337dfb09f4cb33c38b649cf"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-EventRelatedMasterModule-0ff5562de9527194aeedd82d9f1f63efda34905ec669a7fdaa67b6a4a5bc0c1b5a1de293337bb77254a7cc6f709c5f62bcc761c2c337dfb09f4cb33c38b649cf"' :
                                        'id="xs-injectables-links-module-EventRelatedMasterModule-0ff5562de9527194aeedd82d9f1f63efda34905ec669a7fdaa67b6a4a5bc0c1b5a1de293337bb77254a7cc6f709c5f62bcc761c2c337dfb09f4cb33c38b649cf"' }>
                                        <li class="link">
                                            <a href="injectables/EventRelatedMasterService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EventRelatedMasterService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/EventStatusMasterModule.html" data-type="entity-link" >EventStatusMasterModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-EventStatusMasterModule-02dd758302e249b75cec742c577c74729b78086574683e095d8e9350ca9e62f683dcbb00147fd24bfb1e5d726f0f8290c0e85d586bbdcd9404ec8ab8ef2d39d7"' : 'data-target="#xs-controllers-links-module-EventStatusMasterModule-02dd758302e249b75cec742c577c74729b78086574683e095d8e9350ca9e62f683dcbb00147fd24bfb1e5d726f0f8290c0e85d586bbdcd9404ec8ab8ef2d39d7"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-EventStatusMasterModule-02dd758302e249b75cec742c577c74729b78086574683e095d8e9350ca9e62f683dcbb00147fd24bfb1e5d726f0f8290c0e85d586bbdcd9404ec8ab8ef2d39d7"' :
                                            'id="xs-controllers-links-module-EventStatusMasterModule-02dd758302e249b75cec742c577c74729b78086574683e095d8e9350ca9e62f683dcbb00147fd24bfb1e5d726f0f8290c0e85d586bbdcd9404ec8ab8ef2d39d7"' }>
                                            <li class="link">
                                                <a href="controllers/EventStatusMasterController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EventStatusMasterController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-EventStatusMasterModule-02dd758302e249b75cec742c577c74729b78086574683e095d8e9350ca9e62f683dcbb00147fd24bfb1e5d726f0f8290c0e85d586bbdcd9404ec8ab8ef2d39d7"' : 'data-target="#xs-injectables-links-module-EventStatusMasterModule-02dd758302e249b75cec742c577c74729b78086574683e095d8e9350ca9e62f683dcbb00147fd24bfb1e5d726f0f8290c0e85d586bbdcd9404ec8ab8ef2d39d7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-EventStatusMasterModule-02dd758302e249b75cec742c577c74729b78086574683e095d8e9350ca9e62f683dcbb00147fd24bfb1e5d726f0f8290c0e85d586bbdcd9404ec8ab8ef2d39d7"' :
                                        'id="xs-injectables-links-module-EventStatusMasterModule-02dd758302e249b75cec742c577c74729b78086574683e095d8e9350ca9e62f683dcbb00147fd24bfb1e5d726f0f8290c0e85d586bbdcd9404ec8ab8ef2d39d7"' }>
                                        <li class="link">
                                            <a href="injectables/EventStatusMasterService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EventStatusMasterService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/EventTypeMasterModule.html" data-type="entity-link" >EventTypeMasterModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-EventTypeMasterModule-29469fd6a892fbb9c36b4ac17a3e66b2f5493958323c190b9b540d4cd1e051a5e3d13897fa5a0f6a0282f3bebe2ee32de44920034c9ba90a498b402aa82c159c"' : 'data-target="#xs-controllers-links-module-EventTypeMasterModule-29469fd6a892fbb9c36b4ac17a3e66b2f5493958323c190b9b540d4cd1e051a5e3d13897fa5a0f6a0282f3bebe2ee32de44920034c9ba90a498b402aa82c159c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-EventTypeMasterModule-29469fd6a892fbb9c36b4ac17a3e66b2f5493958323c190b9b540d4cd1e051a5e3d13897fa5a0f6a0282f3bebe2ee32de44920034c9ba90a498b402aa82c159c"' :
                                            'id="xs-controllers-links-module-EventTypeMasterModule-29469fd6a892fbb9c36b4ac17a3e66b2f5493958323c190b9b540d4cd1e051a5e3d13897fa5a0f6a0282f3bebe2ee32de44920034c9ba90a498b402aa82c159c"' }>
                                            <li class="link">
                                                <a href="controllers/EventTypeMasterController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EventTypeMasterController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-EventTypeMasterModule-29469fd6a892fbb9c36b4ac17a3e66b2f5493958323c190b9b540d4cd1e051a5e3d13897fa5a0f6a0282f3bebe2ee32de44920034c9ba90a498b402aa82c159c"' : 'data-target="#xs-injectables-links-module-EventTypeMasterModule-29469fd6a892fbb9c36b4ac17a3e66b2f5493958323c190b9b540d4cd1e051a5e3d13897fa5a0f6a0282f3bebe2ee32de44920034c9ba90a498b402aa82c159c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-EventTypeMasterModule-29469fd6a892fbb9c36b4ac17a3e66b2f5493958323c190b9b540d4cd1e051a5e3d13897fa5a0f6a0282f3bebe2ee32de44920034c9ba90a498b402aa82c159c"' :
                                        'id="xs-injectables-links-module-EventTypeMasterModule-29469fd6a892fbb9c36b4ac17a3e66b2f5493958323c190b9b540d4cd1e051a5e3d13897fa5a0f6a0282f3bebe2ee32de44920034c9ba90a498b402aa82c159c"' }>
                                        <li class="link">
                                            <a href="injectables/EventTypeMasterService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EventTypeMasterService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FinancialYearModule.html" data-type="entity-link" >FinancialYearModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-FinancialYearModule-df4c49a80fe6509e617aac28d2db9007cfc1bdef717880142fc13428f1f8f6046e9bd74bdb13a45ec4d2b3d1f90199269a9ded8d48c9100539072a36638adca7"' : 'data-target="#xs-controllers-links-module-FinancialYearModule-df4c49a80fe6509e617aac28d2db9007cfc1bdef717880142fc13428f1f8f6046e9bd74bdb13a45ec4d2b3d1f90199269a9ded8d48c9100539072a36638adca7"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-FinancialYearModule-df4c49a80fe6509e617aac28d2db9007cfc1bdef717880142fc13428f1f8f6046e9bd74bdb13a45ec4d2b3d1f90199269a9ded8d48c9100539072a36638adca7"' :
                                            'id="xs-controllers-links-module-FinancialYearModule-df4c49a80fe6509e617aac28d2db9007cfc1bdef717880142fc13428f1f8f6046e9bd74bdb13a45ec4d2b3d1f90199269a9ded8d48c9100539072a36638adca7"' }>
                                            <li class="link">
                                                <a href="controllers/FinancialYearController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FinancialYearController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-FinancialYearModule-df4c49a80fe6509e617aac28d2db9007cfc1bdef717880142fc13428f1f8f6046e9bd74bdb13a45ec4d2b3d1f90199269a9ded8d48c9100539072a36638adca7"' : 'data-target="#xs-injectables-links-module-FinancialYearModule-df4c49a80fe6509e617aac28d2db9007cfc1bdef717880142fc13428f1f8f6046e9bd74bdb13a45ec4d2b3d1f90199269a9ded8d48c9100539072a36638adca7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-FinancialYearModule-df4c49a80fe6509e617aac28d2db9007cfc1bdef717880142fc13428f1f8f6046e9bd74bdb13a45ec4d2b3d1f90199269a9ded8d48c9100539072a36638adca7"' :
                                        'id="xs-injectables-links-module-FinancialYearModule-df4c49a80fe6509e617aac28d2db9007cfc1bdef717880142fc13428f1f8f6046e9bd74bdb13a45ec4d2b3d1f90199269a9ded8d48c9100539072a36638adca7"' }>
                                        <li class="link">
                                            <a href="injectables/FinancialYearService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FinancialYearService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MenuMasterModule.html" data-type="entity-link" >MenuMasterModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-MenuMasterModule-a0d9d05dae3008ae6e540f006cfb27cc7c005561315e09f0e9173bc420b512437d7a03b783af8f162bc90b58703f58ebc6c279f4eb962b54bceb198db1f6cda4"' : 'data-target="#xs-controllers-links-module-MenuMasterModule-a0d9d05dae3008ae6e540f006cfb27cc7c005561315e09f0e9173bc420b512437d7a03b783af8f162bc90b58703f58ebc6c279f4eb962b54bceb198db1f6cda4"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MenuMasterModule-a0d9d05dae3008ae6e540f006cfb27cc7c005561315e09f0e9173bc420b512437d7a03b783af8f162bc90b58703f58ebc6c279f4eb962b54bceb198db1f6cda4"' :
                                            'id="xs-controllers-links-module-MenuMasterModule-a0d9d05dae3008ae6e540f006cfb27cc7c005561315e09f0e9173bc420b512437d7a03b783af8f162bc90b58703f58ebc6c279f4eb962b54bceb198db1f6cda4"' }>
                                            <li class="link">
                                                <a href="controllers/MenuMasterController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MenuMasterController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-MenuMasterModule-a0d9d05dae3008ae6e540f006cfb27cc7c005561315e09f0e9173bc420b512437d7a03b783af8f162bc90b58703f58ebc6c279f4eb962b54bceb198db1f6cda4"' : 'data-target="#xs-injectables-links-module-MenuMasterModule-a0d9d05dae3008ae6e540f006cfb27cc7c005561315e09f0e9173bc420b512437d7a03b783af8f162bc90b58703f58ebc6c279f4eb962b54bceb198db1f6cda4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MenuMasterModule-a0d9d05dae3008ae6e540f006cfb27cc7c005561315e09f0e9173bc420b512437d7a03b783af8f162bc90b58703f58ebc6c279f4eb962b54bceb198db1f6cda4"' :
                                        'id="xs-injectables-links-module-MenuMasterModule-a0d9d05dae3008ae6e540f006cfb27cc7c005561315e09f0e9173bc420b512437d7a03b783af8f162bc90b58703f58ebc6c279f4eb962b54bceb198db1f6cda4"' }>
                                        <li class="link">
                                            <a href="injectables/MenuMasterService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MenuMasterService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/NotesManagementDealModule.html" data-type="entity-link" >NotesManagementDealModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-NotesManagementDealModule-f190e4dd7f86dcf2efa8d1e2bf1b35107490bc8925ab16d467315597383d778bbb34407ad6052f30600c8661a1c76e2eee3a7848c83ff381ce1ac2431fd61c12"' : 'data-target="#xs-controllers-links-module-NotesManagementDealModule-f190e4dd7f86dcf2efa8d1e2bf1b35107490bc8925ab16d467315597383d778bbb34407ad6052f30600c8661a1c76e2eee3a7848c83ff381ce1ac2431fd61c12"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-NotesManagementDealModule-f190e4dd7f86dcf2efa8d1e2bf1b35107490bc8925ab16d467315597383d778bbb34407ad6052f30600c8661a1c76e2eee3a7848c83ff381ce1ac2431fd61c12"' :
                                            'id="xs-controllers-links-module-NotesManagementDealModule-f190e4dd7f86dcf2efa8d1e2bf1b35107490bc8925ab16d467315597383d778bbb34407ad6052f30600c8661a1c76e2eee3a7848c83ff381ce1ac2431fd61c12"' }>
                                            <li class="link">
                                                <a href="controllers/NotesManagementDealController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotesManagementDealController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-NotesManagementDealModule-f190e4dd7f86dcf2efa8d1e2bf1b35107490bc8925ab16d467315597383d778bbb34407ad6052f30600c8661a1c76e2eee3a7848c83ff381ce1ac2431fd61c12"' : 'data-target="#xs-injectables-links-module-NotesManagementDealModule-f190e4dd7f86dcf2efa8d1e2bf1b35107490bc8925ab16d467315597383d778bbb34407ad6052f30600c8661a1c76e2eee3a7848c83ff381ce1ac2431fd61c12"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-NotesManagementDealModule-f190e4dd7f86dcf2efa8d1e2bf1b35107490bc8925ab16d467315597383d778bbb34407ad6052f30600c8661a1c76e2eee3a7848c83ff381ce1ac2431fd61c12"' :
                                        'id="xs-injectables-links-module-NotesManagementDealModule-f190e4dd7f86dcf2efa8d1e2bf1b35107490bc8925ab16d467315597383d778bbb34407ad6052f30600c8661a1c76e2eee3a7848c83ff381ce1ac2431fd61c12"' }>
                                        <li class="link">
                                            <a href="injectables/NotesManagementDealService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotesManagementDealService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/NotesManageModule.html" data-type="entity-link" >NotesManageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-NotesManageModule-bedd213bcf41bdf80516aab508679e25bd23ad780218c763675ab803a372f398836ff58f42bedf5f0b0f208d215516797a492ab4b67db1d794928af94f3abaea"' : 'data-target="#xs-controllers-links-module-NotesManageModule-bedd213bcf41bdf80516aab508679e25bd23ad780218c763675ab803a372f398836ff58f42bedf5f0b0f208d215516797a492ab4b67db1d794928af94f3abaea"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-NotesManageModule-bedd213bcf41bdf80516aab508679e25bd23ad780218c763675ab803a372f398836ff58f42bedf5f0b0f208d215516797a492ab4b67db1d794928af94f3abaea"' :
                                            'id="xs-controllers-links-module-NotesManageModule-bedd213bcf41bdf80516aab508679e25bd23ad780218c763675ab803a372f398836ff58f42bedf5f0b0f208d215516797a492ab4b67db1d794928af94f3abaea"' }>
                                            <li class="link">
                                                <a href="controllers/NotesManageController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotesManageController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-NotesManageModule-bedd213bcf41bdf80516aab508679e25bd23ad780218c763675ab803a372f398836ff58f42bedf5f0b0f208d215516797a492ab4b67db1d794928af94f3abaea"' : 'data-target="#xs-injectables-links-module-NotesManageModule-bedd213bcf41bdf80516aab508679e25bd23ad780218c763675ab803a372f398836ff58f42bedf5f0b0f208d215516797a492ab4b67db1d794928af94f3abaea"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-NotesManageModule-bedd213bcf41bdf80516aab508679e25bd23ad780218c763675ab803a372f398836ff58f42bedf5f0b0f208d215516797a492ab4b67db1d794928af94f3abaea"' :
                                        'id="xs-injectables-links-module-NotesManageModule-bedd213bcf41bdf80516aab508679e25bd23ad780218c763675ab803a372f398836ff58f42bedf5f0b0f208d215516797a492ab4b67db1d794928af94f3abaea"' }>
                                        <li class="link">
                                            <a href="injectables/NotesManageService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotesManageService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductCategoryModule.html" data-type="entity-link" >ProductCategoryModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ProductCategoryModule-7f805c3782285b23ff0221071f4a9998fe181f7bf5996b06370507af0c1c28a8976574c24b5ab98a407c34bf70a3f8ab43b368907a040aeec5dd12a9015d31df"' : 'data-target="#xs-controllers-links-module-ProductCategoryModule-7f805c3782285b23ff0221071f4a9998fe181f7bf5996b06370507af0c1c28a8976574c24b5ab98a407c34bf70a3f8ab43b368907a040aeec5dd12a9015d31df"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProductCategoryModule-7f805c3782285b23ff0221071f4a9998fe181f7bf5996b06370507af0c1c28a8976574c24b5ab98a407c34bf70a3f8ab43b368907a040aeec5dd12a9015d31df"' :
                                            'id="xs-controllers-links-module-ProductCategoryModule-7f805c3782285b23ff0221071f4a9998fe181f7bf5996b06370507af0c1c28a8976574c24b5ab98a407c34bf70a3f8ab43b368907a040aeec5dd12a9015d31df"' }>
                                            <li class="link">
                                                <a href="controllers/ProductCategoryController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductCategoryController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ProductCategoryModule-7f805c3782285b23ff0221071f4a9998fe181f7bf5996b06370507af0c1c28a8976574c24b5ab98a407c34bf70a3f8ab43b368907a040aeec5dd12a9015d31df"' : 'data-target="#xs-injectables-links-module-ProductCategoryModule-7f805c3782285b23ff0221071f4a9998fe181f7bf5996b06370507af0c1c28a8976574c24b5ab98a407c34bf70a3f8ab43b368907a040aeec5dd12a9015d31df"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProductCategoryModule-7f805c3782285b23ff0221071f4a9998fe181f7bf5996b06370507af0c1c28a8976574c24b5ab98a407c34bf70a3f8ab43b368907a040aeec5dd12a9015d31df"' :
                                        'id="xs-injectables-links-module-ProductCategoryModule-7f805c3782285b23ff0221071f4a9998fe181f7bf5996b06370507af0c1c28a8976574c24b5ab98a407c34bf70a3f8ab43b368907a040aeec5dd12a9015d31df"' }>
                                        <li class="link">
                                            <a href="injectables/ProductCategoryService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductCategoryService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductMasterModule.html" data-type="entity-link" >ProductMasterModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ProductMasterModule-ddfca8b82a52b9c95ffff919829dd8ffe49f09f0f1cdf796d37ab493f80227f6e112a7eea359553ed9d2c4d54e0e808ffee1996dd2320a13838bd50fa3aa6df0"' : 'data-target="#xs-controllers-links-module-ProductMasterModule-ddfca8b82a52b9c95ffff919829dd8ffe49f09f0f1cdf796d37ab493f80227f6e112a7eea359553ed9d2c4d54e0e808ffee1996dd2320a13838bd50fa3aa6df0"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProductMasterModule-ddfca8b82a52b9c95ffff919829dd8ffe49f09f0f1cdf796d37ab493f80227f6e112a7eea359553ed9d2c4d54e0e808ffee1996dd2320a13838bd50fa3aa6df0"' :
                                            'id="xs-controllers-links-module-ProductMasterModule-ddfca8b82a52b9c95ffff919829dd8ffe49f09f0f1cdf796d37ab493f80227f6e112a7eea359553ed9d2c4d54e0e808ffee1996dd2320a13838bd50fa3aa6df0"' }>
                                            <li class="link">
                                                <a href="controllers/ProductMasterController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductMasterController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ProductMasterModule-ddfca8b82a52b9c95ffff919829dd8ffe49f09f0f1cdf796d37ab493f80227f6e112a7eea359553ed9d2c4d54e0e808ffee1996dd2320a13838bd50fa3aa6df0"' : 'data-target="#xs-injectables-links-module-ProductMasterModule-ddfca8b82a52b9c95ffff919829dd8ffe49f09f0f1cdf796d37ab493f80227f6e112a7eea359553ed9d2c4d54e0e808ffee1996dd2320a13838bd50fa3aa6df0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProductMasterModule-ddfca8b82a52b9c95ffff919829dd8ffe49f09f0f1cdf796d37ab493f80227f6e112a7eea359553ed9d2c4d54e0e808ffee1996dd2320a13838bd50fa3aa6df0"' :
                                        'id="xs-injectables-links-module-ProductMasterModule-ddfca8b82a52b9c95ffff919829dd8ffe49f09f0f1cdf796d37ab493f80227f6e112a7eea359553ed9d2c4d54e0e808ffee1996dd2320a13838bd50fa3aa6df0"' }>
                                        <li class="link">
                                            <a href="injectables/ProductMasterService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductMasterService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductRateMasterModule.html" data-type="entity-link" >ProductRateMasterModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ProductRateMasterModule-a68784e528d0b3a66ca0bdb17bc81446e9e7775daa3eabbe82c12f591e8003338ce880b42c085851930d001e840e7ab49c5384e2a089528c727ad8ae9f22436e"' : 'data-target="#xs-controllers-links-module-ProductRateMasterModule-a68784e528d0b3a66ca0bdb17bc81446e9e7775daa3eabbe82c12f591e8003338ce880b42c085851930d001e840e7ab49c5384e2a089528c727ad8ae9f22436e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProductRateMasterModule-a68784e528d0b3a66ca0bdb17bc81446e9e7775daa3eabbe82c12f591e8003338ce880b42c085851930d001e840e7ab49c5384e2a089528c727ad8ae9f22436e"' :
                                            'id="xs-controllers-links-module-ProductRateMasterModule-a68784e528d0b3a66ca0bdb17bc81446e9e7775daa3eabbe82c12f591e8003338ce880b42c085851930d001e840e7ab49c5384e2a089528c727ad8ae9f22436e"' }>
                                            <li class="link">
                                                <a href="controllers/ProductRateMasterController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductRateMasterController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ProductRateMasterModule-a68784e528d0b3a66ca0bdb17bc81446e9e7775daa3eabbe82c12f591e8003338ce880b42c085851930d001e840e7ab49c5384e2a089528c727ad8ae9f22436e"' : 'data-target="#xs-injectables-links-module-ProductRateMasterModule-a68784e528d0b3a66ca0bdb17bc81446e9e7775daa3eabbe82c12f591e8003338ce880b42c085851930d001e840e7ab49c5384e2a089528c727ad8ae9f22436e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProductRateMasterModule-a68784e528d0b3a66ca0bdb17bc81446e9e7775daa3eabbe82c12f591e8003338ce880b42c085851930d001e840e7ab49c5384e2a089528c727ad8ae9f22436e"' :
                                        'id="xs-injectables-links-module-ProductRateMasterModule-a68784e528d0b3a66ca0bdb17bc81446e9e7775daa3eabbe82c12f591e8003338ce880b42c085851930d001e840e7ab49c5384e2a089528c727ad8ae9f22436e"' }>
                                        <li class="link">
                                            <a href="injectables/ProductRateMasterService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductRateMasterService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductTypeModule.html" data-type="entity-link" >ProductTypeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ProductTypeModule-0036a27ea37c6291110306f9fadb8d4e783ea74f56b51c10a5231cc6797900282a004c64682bb5cd6b48f191ef781e0623dc6edde3f1fb049f42e8c8d0a6fb3d"' : 'data-target="#xs-controllers-links-module-ProductTypeModule-0036a27ea37c6291110306f9fadb8d4e783ea74f56b51c10a5231cc6797900282a004c64682bb5cd6b48f191ef781e0623dc6edde3f1fb049f42e8c8d0a6fb3d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProductTypeModule-0036a27ea37c6291110306f9fadb8d4e783ea74f56b51c10a5231cc6797900282a004c64682bb5cd6b48f191ef781e0623dc6edde3f1fb049f42e8c8d0a6fb3d"' :
                                            'id="xs-controllers-links-module-ProductTypeModule-0036a27ea37c6291110306f9fadb8d4e783ea74f56b51c10a5231cc6797900282a004c64682bb5cd6b48f191ef781e0623dc6edde3f1fb049f42e8c8d0a6fb3d"' }>
                                            <li class="link">
                                                <a href="controllers/ProductTypeController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductTypeController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ProductTypeModule-0036a27ea37c6291110306f9fadb8d4e783ea74f56b51c10a5231cc6797900282a004c64682bb5cd6b48f191ef781e0623dc6edde3f1fb049f42e8c8d0a6fb3d"' : 'data-target="#xs-injectables-links-module-ProductTypeModule-0036a27ea37c6291110306f9fadb8d4e783ea74f56b51c10a5231cc6797900282a004c64682bb5cd6b48f191ef781e0623dc6edde3f1fb049f42e8c8d0a6fb3d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProductTypeModule-0036a27ea37c6291110306f9fadb8d4e783ea74f56b51c10a5231cc6797900282a004c64682bb5cd6b48f191ef781e0623dc6edde3f1fb049f42e8c8d0a6fb3d"' :
                                        'id="xs-injectables-links-module-ProductTypeModule-0036a27ea37c6291110306f9fadb8d4e783ea74f56b51c10a5231cc6797900282a004c64682bb5cd6b48f191ef781e0623dc6edde3f1fb049f42e8c8d0a6fb3d"' }>
                                        <li class="link">
                                            <a href="injectables/ProductTypeService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductTypeService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TaskCategoryModule.html" data-type="entity-link" >TaskCategoryModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-TaskCategoryModule-b0f2f426843b0c8353865ccd512609c2c8a1f291dfa2d9c6fc4b491c5026da14cf4e35cd124d3613b84d37290870f08efb277c96748feea20dd664ff510698bc"' : 'data-target="#xs-controllers-links-module-TaskCategoryModule-b0f2f426843b0c8353865ccd512609c2c8a1f291dfa2d9c6fc4b491c5026da14cf4e35cd124d3613b84d37290870f08efb277c96748feea20dd664ff510698bc"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TaskCategoryModule-b0f2f426843b0c8353865ccd512609c2c8a1f291dfa2d9c6fc4b491c5026da14cf4e35cd124d3613b84d37290870f08efb277c96748feea20dd664ff510698bc"' :
                                            'id="xs-controllers-links-module-TaskCategoryModule-b0f2f426843b0c8353865ccd512609c2c8a1f291dfa2d9c6fc4b491c5026da14cf4e35cd124d3613b84d37290870f08efb277c96748feea20dd664ff510698bc"' }>
                                            <li class="link">
                                                <a href="controllers/TaskCategoryController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TaskCategoryController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-TaskCategoryModule-b0f2f426843b0c8353865ccd512609c2c8a1f291dfa2d9c6fc4b491c5026da14cf4e35cd124d3613b84d37290870f08efb277c96748feea20dd664ff510698bc"' : 'data-target="#xs-injectables-links-module-TaskCategoryModule-b0f2f426843b0c8353865ccd512609c2c8a1f291dfa2d9c6fc4b491c5026da14cf4e35cd124d3613b84d37290870f08efb277c96748feea20dd664ff510698bc"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TaskCategoryModule-b0f2f426843b0c8353865ccd512609c2c8a1f291dfa2d9c6fc4b491c5026da14cf4e35cd124d3613b84d37290870f08efb277c96748feea20dd664ff510698bc"' :
                                        'id="xs-injectables-links-module-TaskCategoryModule-b0f2f426843b0c8353865ccd512609c2c8a1f291dfa2d9c6fc4b491c5026da14cf4e35cd124d3613b84d37290870f08efb277c96748feea20dd664ff510698bc"' }>
                                        <li class="link">
                                            <a href="injectables/TaskCategoryService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TaskCategoryService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TaskManagementModule.html" data-type="entity-link" >TaskManagementModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-TaskManagementModule-ff43eb3376427d41502b6a72c0c1696f6d2cb4fe6f6700394a557b4e8e127bd7c44a3744d318ea54dd6148ee0a25b0c81e1b792c9ae7fc17cfbf0e8bb12fc74f"' : 'data-target="#xs-controllers-links-module-TaskManagementModule-ff43eb3376427d41502b6a72c0c1696f6d2cb4fe6f6700394a557b4e8e127bd7c44a3744d318ea54dd6148ee0a25b0c81e1b792c9ae7fc17cfbf0e8bb12fc74f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TaskManagementModule-ff43eb3376427d41502b6a72c0c1696f6d2cb4fe6f6700394a557b4e8e127bd7c44a3744d318ea54dd6148ee0a25b0c81e1b792c9ae7fc17cfbf0e8bb12fc74f"' :
                                            'id="xs-controllers-links-module-TaskManagementModule-ff43eb3376427d41502b6a72c0c1696f6d2cb4fe6f6700394a557b4e8e127bd7c44a3744d318ea54dd6148ee0a25b0c81e1b792c9ae7fc17cfbf0e8bb12fc74f"' }>
                                            <li class="link">
                                                <a href="controllers/TaskManagementController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TaskManagementController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-TaskManagementModule-ff43eb3376427d41502b6a72c0c1696f6d2cb4fe6f6700394a557b4e8e127bd7c44a3744d318ea54dd6148ee0a25b0c81e1b792c9ae7fc17cfbf0e8bb12fc74f"' : 'data-target="#xs-injectables-links-module-TaskManagementModule-ff43eb3376427d41502b6a72c0c1696f6d2cb4fe6f6700394a557b4e8e127bd7c44a3744d318ea54dd6148ee0a25b0c81e1b792c9ae7fc17cfbf0e8bb12fc74f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TaskManagementModule-ff43eb3376427d41502b6a72c0c1696f6d2cb4fe6f6700394a557b4e8e127bd7c44a3744d318ea54dd6148ee0a25b0c81e1b792c9ae7fc17cfbf0e8bb12fc74f"' :
                                        'id="xs-injectables-links-module-TaskManagementModule-ff43eb3376427d41502b6a72c0c1696f6d2cb4fe6f6700394a557b4e8e127bd7c44a3744d318ea54dd6148ee0a25b0c81e1b792c9ae7fc17cfbf0e8bb12fc74f"' }>
                                        <li class="link">
                                            <a href="injectables/TaskManagementService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TaskManagementService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TaskModule.html" data-type="entity-link" >TaskModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TaxMasterModule.html" data-type="entity-link" >TaxMasterModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-TaxMasterModule-11fe92f7d3db89b77d267580c421effd584a80c9a7761822ca6123995b53b25e727a68f59405754d8c415e8eb851986719abfd0c771069a2e431e6aa3007ba65"' : 'data-target="#xs-controllers-links-module-TaxMasterModule-11fe92f7d3db89b77d267580c421effd584a80c9a7761822ca6123995b53b25e727a68f59405754d8c415e8eb851986719abfd0c771069a2e431e6aa3007ba65"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TaxMasterModule-11fe92f7d3db89b77d267580c421effd584a80c9a7761822ca6123995b53b25e727a68f59405754d8c415e8eb851986719abfd0c771069a2e431e6aa3007ba65"' :
                                            'id="xs-controllers-links-module-TaxMasterModule-11fe92f7d3db89b77d267580c421effd584a80c9a7761822ca6123995b53b25e727a68f59405754d8c415e8eb851986719abfd0c771069a2e431e6aa3007ba65"' }>
                                            <li class="link">
                                                <a href="controllers/TaxMasterController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TaxMasterController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-TaxMasterModule-11fe92f7d3db89b77d267580c421effd584a80c9a7761822ca6123995b53b25e727a68f59405754d8c415e8eb851986719abfd0c771069a2e431e6aa3007ba65"' : 'data-target="#xs-injectables-links-module-TaxMasterModule-11fe92f7d3db89b77d267580c421effd584a80c9a7761822ca6123995b53b25e727a68f59405754d8c415e8eb851986719abfd0c771069a2e431e6aa3007ba65"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TaxMasterModule-11fe92f7d3db89b77d267580c421effd584a80c9a7761822ca6123995b53b25e727a68f59405754d8c415e8eb851986719abfd0c771069a2e431e6aa3007ba65"' :
                                        'id="xs-injectables-links-module-TaxMasterModule-11fe92f7d3db89b77d267580c421effd584a80c9a7761822ca6123995b53b25e727a68f59405754d8c415e8eb851986719abfd0c771069a2e431e6aa3007ba65"' }>
                                        <li class="link">
                                            <a href="injectables/TaxMasterService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TaxMasterService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TransactionMasterModule.html" data-type="entity-link" >TransactionMasterModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-TransactionMasterModule-13941d3ec0d4c476274064545400367ebee782bff9c942705904007f4378428490a0a90149aac7b45c6f8353c40199a8a22431bf685a7de676ddb15f2cb072be"' : 'data-target="#xs-controllers-links-module-TransactionMasterModule-13941d3ec0d4c476274064545400367ebee782bff9c942705904007f4378428490a0a90149aac7b45c6f8353c40199a8a22431bf685a7de676ddb15f2cb072be"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TransactionMasterModule-13941d3ec0d4c476274064545400367ebee782bff9c942705904007f4378428490a0a90149aac7b45c6f8353c40199a8a22431bf685a7de676ddb15f2cb072be"' :
                                            'id="xs-controllers-links-module-TransactionMasterModule-13941d3ec0d4c476274064545400367ebee782bff9c942705904007f4378428490a0a90149aac7b45c6f8353c40199a8a22431bf685a7de676ddb15f2cb072be"' }>
                                            <li class="link">
                                                <a href="controllers/TransactionMasterController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TransactionMasterController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-TransactionMasterModule-13941d3ec0d4c476274064545400367ebee782bff9c942705904007f4378428490a0a90149aac7b45c6f8353c40199a8a22431bf685a7de676ddb15f2cb072be"' : 'data-target="#xs-injectables-links-module-TransactionMasterModule-13941d3ec0d4c476274064545400367ebee782bff9c942705904007f4378428490a0a90149aac7b45c6f8353c40199a8a22431bf685a7de676ddb15f2cb072be"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TransactionMasterModule-13941d3ec0d4c476274064545400367ebee782bff9c942705904007f4378428490a0a90149aac7b45c6f8353c40199a8a22431bf685a7de676ddb15f2cb072be"' :
                                        'id="xs-injectables-links-module-TransactionMasterModule-13941d3ec0d4c476274064545400367ebee782bff9c942705904007f4378428490a0a90149aac7b45c6f8353c40199a8a22431bf685a7de676ddb15f2cb072be"' }>
                                        <li class="link">
                                            <a href="injectables/TransactionMasterService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TransactionMasterService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UnitMasterModule.html" data-type="entity-link" >UnitMasterModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UnitMasterModule-d55dce8be51e61d0f3dde0b001900b076e2ba494233ad06da68bd016acc11f03fbbbb6c242109e517e1c6342e5651da5828702ce0267250ea409931559671a05"' : 'data-target="#xs-controllers-links-module-UnitMasterModule-d55dce8be51e61d0f3dde0b001900b076e2ba494233ad06da68bd016acc11f03fbbbb6c242109e517e1c6342e5651da5828702ce0267250ea409931559671a05"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UnitMasterModule-d55dce8be51e61d0f3dde0b001900b076e2ba494233ad06da68bd016acc11f03fbbbb6c242109e517e1c6342e5651da5828702ce0267250ea409931559671a05"' :
                                            'id="xs-controllers-links-module-UnitMasterModule-d55dce8be51e61d0f3dde0b001900b076e2ba494233ad06da68bd016acc11f03fbbbb6c242109e517e1c6342e5651da5828702ce0267250ea409931559671a05"' }>
                                            <li class="link">
                                                <a href="controllers/UnitMasterController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UnitMasterController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UnitMasterModule-d55dce8be51e61d0f3dde0b001900b076e2ba494233ad06da68bd016acc11f03fbbbb6c242109e517e1c6342e5651da5828702ce0267250ea409931559671a05"' : 'data-target="#xs-injectables-links-module-UnitMasterModule-d55dce8be51e61d0f3dde0b001900b076e2ba494233ad06da68bd016acc11f03fbbbb6c242109e517e1c6342e5651da5828702ce0267250ea409931559671a05"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UnitMasterModule-d55dce8be51e61d0f3dde0b001900b076e2ba494233ad06da68bd016acc11f03fbbbb6c242109e517e1c6342e5651da5828702ce0267250ea409931559671a05"' :
                                        'id="xs-injectables-links-module-UnitMasterModule-d55dce8be51e61d0f3dde0b001900b076e2ba494233ad06da68bd016acc11f03fbbbb6c242109e517e1c6342e5651da5828702ce0267250ea409931559671a05"' }>
                                        <li class="link">
                                            <a href="injectables/UnitMasterService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UnitMasterService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserMasterModule.html" data-type="entity-link" >UserMasterModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UserMasterModule-38ca0631954dfe762132a9a5ff7702c41be6aed4a1f26cc0cc50ea057f6982562e011535a6d7afd2ef82491fe3777ea5f2235285ec4cab94703664979418f686"' : 'data-target="#xs-controllers-links-module-UserMasterModule-38ca0631954dfe762132a9a5ff7702c41be6aed4a1f26cc0cc50ea057f6982562e011535a6d7afd2ef82491fe3777ea5f2235285ec4cab94703664979418f686"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserMasterModule-38ca0631954dfe762132a9a5ff7702c41be6aed4a1f26cc0cc50ea057f6982562e011535a6d7afd2ef82491fe3777ea5f2235285ec4cab94703664979418f686"' :
                                            'id="xs-controllers-links-module-UserMasterModule-38ca0631954dfe762132a9a5ff7702c41be6aed4a1f26cc0cc50ea057f6982562e011535a6d7afd2ef82491fe3777ea5f2235285ec4cab94703664979418f686"' }>
                                            <li class="link">
                                                <a href="controllers/UserMasterController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserMasterController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserMasterModule-38ca0631954dfe762132a9a5ff7702c41be6aed4a1f26cc0cc50ea057f6982562e011535a6d7afd2ef82491fe3777ea5f2235285ec4cab94703664979418f686"' : 'data-target="#xs-injectables-links-module-UserMasterModule-38ca0631954dfe762132a9a5ff7702c41be6aed4a1f26cc0cc50ea057f6982562e011535a6d7afd2ef82491fe3777ea5f2235285ec4cab94703664979418f686"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserMasterModule-38ca0631954dfe762132a9a5ff7702c41be6aed4a1f26cc0cc50ea057f6982562e011535a6d7afd2ef82491fe3777ea5f2235285ec4cab94703664979418f686"' :
                                        'id="xs-injectables-links-module-UserMasterModule-38ca0631954dfe762132a9a5ff7702c41be6aed4a1f26cc0cc50ea057f6982562e011535a6d7afd2ef82491fe3777ea5f2235285ec4cab94703664979418f686"' }>
                                        <li class="link">
                                            <a href="injectables/UserMasterService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserMasterService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserMenuAccessModule.html" data-type="entity-link" >UserMenuAccessModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UserMenuAccessModule-043cef6e26513e6634011eafb9436c18dbcc3ae7a93e6209cc2f540fb887f7bb9f35e962ac6c7842f2f923b9542ab5b36106cd747db40bd47e919215f8be90fb"' : 'data-target="#xs-controllers-links-module-UserMenuAccessModule-043cef6e26513e6634011eafb9436c18dbcc3ae7a93e6209cc2f540fb887f7bb9f35e962ac6c7842f2f923b9542ab5b36106cd747db40bd47e919215f8be90fb"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserMenuAccessModule-043cef6e26513e6634011eafb9436c18dbcc3ae7a93e6209cc2f540fb887f7bb9f35e962ac6c7842f2f923b9542ab5b36106cd747db40bd47e919215f8be90fb"' :
                                            'id="xs-controllers-links-module-UserMenuAccessModule-043cef6e26513e6634011eafb9436c18dbcc3ae7a93e6209cc2f540fb887f7bb9f35e962ac6c7842f2f923b9542ab5b36106cd747db40bd47e919215f8be90fb"' }>
                                            <li class="link">
                                                <a href="controllers/UserMenuAccessController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserMenuAccessController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserMenuAccessModule-043cef6e26513e6634011eafb9436c18dbcc3ae7a93e6209cc2f540fb887f7bb9f35e962ac6c7842f2f923b9542ab5b36106cd747db40bd47e919215f8be90fb"' : 'data-target="#xs-injectables-links-module-UserMenuAccessModule-043cef6e26513e6634011eafb9436c18dbcc3ae7a93e6209cc2f540fb887f7bb9f35e962ac6c7842f2f923b9542ab5b36106cd747db40bd47e919215f8be90fb"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserMenuAccessModule-043cef6e26513e6634011eafb9436c18dbcc3ae7a93e6209cc2f540fb887f7bb9f35e962ac6c7842f2f923b9542ab5b36106cd747db40bd47e919215f8be90fb"' :
                                        'id="xs-injectables-links-module-UserMenuAccessModule-043cef6e26513e6634011eafb9436c18dbcc3ae7a93e6209cc2f540fb887f7bb9f35e962ac6c7842f2f923b9542ab5b36106cd747db40bd47e919215f8be90fb"' }>
                                        <li class="link">
                                            <a href="injectables/UserMenuAccessService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserMenuAccessService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserRoleMasterModule.html" data-type="entity-link" >UserRoleMasterModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UserRoleMasterModule-b809fb093e23c3a09f9378cbb5042a3e5439a04b7bf7f12dcd657684adbd0489c948f3507f9ed2ff7e518e8838c9ae190a1b7d6e21e8a33279799a26a6787a7a"' : 'data-target="#xs-controllers-links-module-UserRoleMasterModule-b809fb093e23c3a09f9378cbb5042a3e5439a04b7bf7f12dcd657684adbd0489c948f3507f9ed2ff7e518e8838c9ae190a1b7d6e21e8a33279799a26a6787a7a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserRoleMasterModule-b809fb093e23c3a09f9378cbb5042a3e5439a04b7bf7f12dcd657684adbd0489c948f3507f9ed2ff7e518e8838c9ae190a1b7d6e21e8a33279799a26a6787a7a"' :
                                            'id="xs-controllers-links-module-UserRoleMasterModule-b809fb093e23c3a09f9378cbb5042a3e5439a04b7bf7f12dcd657684adbd0489c948f3507f9ed2ff7e518e8838c9ae190a1b7d6e21e8a33279799a26a6787a7a"' }>
                                            <li class="link">
                                                <a href="controllers/UserRoleMasterController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserRoleMasterController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserRoleMasterModule-b809fb093e23c3a09f9378cbb5042a3e5439a04b7bf7f12dcd657684adbd0489c948f3507f9ed2ff7e518e8838c9ae190a1b7d6e21e8a33279799a26a6787a7a"' : 'data-target="#xs-injectables-links-module-UserRoleMasterModule-b809fb093e23c3a09f9378cbb5042a3e5439a04b7bf7f12dcd657684adbd0489c948f3507f9ed2ff7e518e8838c9ae190a1b7d6e21e8a33279799a26a6787a7a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserRoleMasterModule-b809fb093e23c3a09f9378cbb5042a3e5439a04b7bf7f12dcd657684adbd0489c948f3507f9ed2ff7e518e8838c9ae190a1b7d6e21e8a33279799a26a6787a7a"' :
                                        'id="xs-injectables-links-module-UserRoleMasterModule-b809fb093e23c3a09f9378cbb5042a3e5439a04b7bf7f12dcd657684adbd0489c948f3507f9ed2ff7e518e8838c9ae190a1b7d6e21e8a33279799a26a6787a7a"' }>
                                        <li class="link">
                                            <a href="injectables/UserRoleMasterService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserRoleMasterService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/ActivityMoniterController.html" data-type="entity-link" >ActivityMoniterController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CallLogManagementController.html" data-type="entity-link" >CallLogManagementController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CallStatusMasterController.html" data-type="entity-link" >CallStatusMasterController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CampaignMasterController.html" data-type="entity-link" >CampaignMasterController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CampaignTypeMasterController.html" data-type="entity-link" >CampaignTypeMasterController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CompanyMasterController.html" data-type="entity-link" >CompanyMasterController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ContactCampaignMappingController.html" data-type="entity-link" >ContactCampaignMappingController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ContactDocumentMasterController.html" data-type="entity-link" >ContactDocumentMasterController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ContactEmailMappingAttachmentController.html" data-type="entity-link" >ContactEmailMappingAttachmentController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ContactEmailMappingController.html" data-type="entity-link" >ContactEmailMappingController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ContactMasterController.html" data-type="entity-link" >ContactMasterController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ContactVisitMasterController.html" data-type="entity-link" >ContactVisitMasterController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/DealAttachmentController.html" data-type="entity-link" >DealAttachmentController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/DealMasterController.html" data-type="entity-link" >DealMasterController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/DealMasterMilestoneMappingController.html" data-type="entity-link" >DealMasterMilestoneMappingController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/DealMasterProductMappingController.html" data-type="entity-link" >DealMasterProductMappingController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/DealMilestoneMasterController.html" data-type="entity-link" >DealMilestoneMasterController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/DocumentMasterController.html" data-type="entity-link" >DocumentMasterController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/EventMasterController.html" data-type="entity-link" >EventMasterController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/EventRelatedMasterController.html" data-type="entity-link" >EventRelatedMasterController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/EventStatusMasterController.html" data-type="entity-link" >EventStatusMasterController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/EventTypeMasterController.html" data-type="entity-link" >EventTypeMasterController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/FinancialYearController.html" data-type="entity-link" >FinancialYearController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/MenuMasterController.html" data-type="entity-link" >MenuMasterController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/NotesManageController.html" data-type="entity-link" >NotesManageController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/NotesManagementDealController.html" data-type="entity-link" >NotesManagementDealController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ProductCategoryController.html" data-type="entity-link" >ProductCategoryController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ProductMasterController.html" data-type="entity-link" >ProductMasterController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ProductRateMasterController.html" data-type="entity-link" >ProductRateMasterController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ProductTypeController.html" data-type="entity-link" >ProductTypeController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/TaskCategoryController.html" data-type="entity-link" >TaskCategoryController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/TaskManagementController.html" data-type="entity-link" >TaskManagementController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/TaxMasterController.html" data-type="entity-link" >TaxMasterController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/TransactionMasterController.html" data-type="entity-link" >TransactionMasterController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UnitMasterController.html" data-type="entity-link" >UnitMasterController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserMasterController.html" data-type="entity-link" >UserMasterController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserMenuAccessController.html" data-type="entity-link" >UserMenuAccessController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserRoleMasterController.html" data-type="entity-link" >UserRoleMasterController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#entities-links"' :
                                'data-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/activity_moniter.html" data-type="entity-link" >activity_moniter</a>
                                </li>
                                <li class="link">
                                    <a href="entities/call_log_management.html" data-type="entity-link" >call_log_management</a>
                                </li>
                                <li class="link">
                                    <a href="entities/call_status_master.html" data-type="entity-link" >call_status_master</a>
                                </li>
                                <li class="link">
                                    <a href="entities/campaign_master.html" data-type="entity-link" >campaign_master</a>
                                </li>
                                <li class="link">
                                    <a href="entities/campaign_type_master.html" data-type="entity-link" >campaign_type_master</a>
                                </li>
                                <li class="link">
                                    <a href="entities/company_master.html" data-type="entity-link" >company_master</a>
                                </li>
                                <li class="link">
                                    <a href="entities/contact_campaign_mapping.html" data-type="entity-link" >contact_campaign_mapping</a>
                                </li>
                                <li class="link">
                                    <a href="entities/contact_document_master.html" data-type="entity-link" >contact_document_master</a>
                                </li>
                                <li class="link">
                                    <a href="entities/contact_email_mapping.html" data-type="entity-link" >contact_email_mapping</a>
                                </li>
                                <li class="link">
                                    <a href="entities/contact_email_mapping_attachment.html" data-type="entity-link" >contact_email_mapping_attachment</a>
                                </li>
                                <li class="link">
                                    <a href="entities/contact_master.html" data-type="entity-link" >contact_master</a>
                                </li>
                                <li class="link">
                                    <a href="entities/contact_visit_master.html" data-type="entity-link" >contact_visit_master</a>
                                </li>
                                <li class="link">
                                    <a href="entities/country_state_city.html" data-type="entity-link" >country_state_city</a>
                                </li>
                                <li class="link">
                                    <a href="entities/deal_attachment.html" data-type="entity-link" >deal_attachment</a>
                                </li>
                                <li class="link">
                                    <a href="entities/deal_master.html" data-type="entity-link" >deal_master</a>
                                </li>
                                <li class="link">
                                    <a href="entities/deal_master_milestone_mapping.html" data-type="entity-link" >deal_master_milestone_mapping</a>
                                </li>
                                <li class="link">
                                    <a href="entities/deal_master_product_mapping.html" data-type="entity-link" >deal_master_product_mapping</a>
                                </li>
                                <li class="link">
                                    <a href="entities/deal_milestone_master.html" data-type="entity-link" >deal_milestone_master</a>
                                </li>
                                <li class="link">
                                    <a href="entities/document_master.html" data-type="entity-link" >document_master</a>
                                </li>
                                <li class="link">
                                    <a href="entities/event_master.html" data-type="entity-link" >event_master</a>
                                </li>
                                <li class="link">
                                    <a href="entities/event_related_master.html" data-type="entity-link" >event_related_master</a>
                                </li>
                                <li class="link">
                                    <a href="entities/event_status_master.html" data-type="entity-link" >event_status_master</a>
                                </li>
                                <li class="link">
                                    <a href="entities/event_type_master.html" data-type="entity-link" >event_type_master</a>
                                </li>
                                <li class="link">
                                    <a href="entities/financial_year.html" data-type="entity-link" >financial_year</a>
                                </li>
                                <li class="link">
                                    <a href="entities/menu_master.html" data-type="entity-link" >menu_master</a>
                                </li>
                                <li class="link">
                                    <a href="entities/notes_manage.html" data-type="entity-link" >notes_manage</a>
                                </li>
                                <li class="link">
                                    <a href="entities/notes_management_deal.html" data-type="entity-link" >notes_management_deal</a>
                                </li>
                                <li class="link">
                                    <a href="entities/product_category.html" data-type="entity-link" >product_category</a>
                                </li>
                                <li class="link">
                                    <a href="entities/product_master.html" data-type="entity-link" >product_master</a>
                                </li>
                                <li class="link">
                                    <a href="entities/product_rate_master.html" data-type="entity-link" >product_rate_master</a>
                                </li>
                                <li class="link">
                                    <a href="entities/product_type.html" data-type="entity-link" >product_type</a>
                                </li>
                                <li class="link">
                                    <a href="entities/task_category.html" data-type="entity-link" >task_category</a>
                                </li>
                                <li class="link">
                                    <a href="entities/task_management.html" data-type="entity-link" >task_management</a>
                                </li>
                                <li class="link">
                                    <a href="entities/tax_master.html" data-type="entity-link" >tax_master</a>
                                </li>
                                <li class="link">
                                    <a href="entities/transaction_master.html" data-type="entity-link" >transaction_master</a>
                                </li>
                                <li class="link">
                                    <a href="entities/unit_master.html" data-type="entity-link" >unit_master</a>
                                </li>
                                <li class="link">
                                    <a href="entities/user_master.html" data-type="entity-link" >user_master</a>
                                </li>
                                <li class="link">
                                    <a href="entities/user_menu_access.html" data-type="entity-link" >user_menu_access</a>
                                </li>
                                <li class="link">
                                    <a href="entities/user_role_master.html" data-type="entity-link" >user_role_master</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Pagination.html" data-type="entity-link" >Pagination</a>
                            </li>
                            <li class="link">
                                <a href="classes/Pagination-1.html" data-type="entity-link" >Pagination</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ActivityMoniterService.html" data-type="entity-link" >ActivityMoniterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CallLogManagementService.html" data-type="entity-link" >CallLogManagementService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CallStatusMasterService.html" data-type="entity-link" >CallStatusMasterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CampaignMasterService.html" data-type="entity-link" >CampaignMasterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CampaignTypeMasterService.html" data-type="entity-link" >CampaignTypeMasterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CompanyMasterService.html" data-type="entity-link" >CompanyMasterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ContactCampaignMappingService.html" data-type="entity-link" >ContactCampaignMappingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ContactDocumentMasterService.html" data-type="entity-link" >ContactDocumentMasterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ContactEmailMappingAttachmentService.html" data-type="entity-link" >ContactEmailMappingAttachmentService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ContactEmailMappingService.html" data-type="entity-link" >ContactEmailMappingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ContactMasterService.html" data-type="entity-link" >ContactMasterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ContactVisitMasterService.html" data-type="entity-link" >ContactVisitMasterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DealAttachmentService.html" data-type="entity-link" >DealAttachmentService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DealMasterMilestoneMappingService.html" data-type="entity-link" >DealMasterMilestoneMappingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DealMasterProductMappingService.html" data-type="entity-link" >DealMasterProductMappingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DealMasterService.html" data-type="entity-link" >DealMasterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DealMilestoneMasterService.html" data-type="entity-link" >DealMilestoneMasterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DocumentMasterService.html" data-type="entity-link" >DocumentMasterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EventMasterService.html" data-type="entity-link" >EventMasterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EventRelatedMasterService.html" data-type="entity-link" >EventRelatedMasterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EventStatusMasterService.html" data-type="entity-link" >EventStatusMasterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EventTypeMasterService.html" data-type="entity-link" >EventTypeMasterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FinancialYearService.html" data-type="entity-link" >FinancialYearService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MenuMasterService.html" data-type="entity-link" >MenuMasterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NotesManagementDealService.html" data-type="entity-link" >NotesManagementDealService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NotesManageService.html" data-type="entity-link" >NotesManageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductCategoryService.html" data-type="entity-link" >ProductCategoryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductMasterService.html" data-type="entity-link" >ProductMasterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductRateMasterService.html" data-type="entity-link" >ProductRateMasterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductTypeService.html" data-type="entity-link" >ProductTypeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TaskCategoryService.html" data-type="entity-link" >TaskCategoryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TaskManagementService.html" data-type="entity-link" >TaskManagementService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TaxMasterService.html" data-type="entity-link" >TaxMasterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TransactionMasterService.html" data-type="entity-link" >TransactionMasterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UnitMasterService.html" data-type="entity-link" >UnitMasterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserMasterService.html" data-type="entity-link" >UserMasterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserMenuAccessService.html" data-type="entity-link" >UserMenuAccessService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserRoleMasterService.html" data-type="entity-link" >UserRoleMasterService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/PaginationDto.html" data-type="entity-link" >PaginationDto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PaginationInterface.html" data-type="entity-link" >PaginationInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PaginationOptionsInterface.html" data-type="entity-link" >PaginationOptionsInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PaginationResultInterface.html" data-type="entity-link" >PaginationResultInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PaginationResultInterface-1.html" data-type="entity-link" >PaginationResultInterface</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});