/**
 * List of values that can be used as `name`s on HTML `meta` elements.
 *
 * @type {Array<string>}
 */
export const metaName = [
  'aglsterms.accessibility',
  'aglsterms.accessmode',
  'aglsterms.act',
  'aglsterms.aggregationlevel',
  'aglsterms.allow-search',
  'aglsterms.availability',
  'aglsterms.case',
  'aglsterms.category',
  'aglsterms.datelicensed',
  'aglsterms.documenttype',
  'aglsterms.function',
  'aglsterms.isbasedon',
  'aglsterms.isbasisfor',
  'aglsterms.jurisdiction',
  'aglsterms.mandate',
  'aglsterms.protectivemarking',
  'aglsterms.regulation',
  'aglsterms.servicetype',
  'alexaverifyid',
  'apple-itunes-app',
  'apple-mobile-web-app-capable',
  'apple-mobile-web-app-status-bar-style',
  'apple-mobile-web-app-title',
  'apple-touch-fullscreen',
  'application-name',
  'application-url',
  'application-version',
  'appstore:bundle_id',
  'appstore:developer_url',
  'appstore:store_id',
  'audience',
  'baiduspider',
  'bitcoin',
  'blazerr-secure',
  'blazerr-seo',
  'blazerr-ssl',
  'blazerr-support-id-noncookies',
  'blazerr-support-identifier',
  'bug.blocked',
  'bug.comment',
  'bug.component',
  'bug.product',
  'bug.short_desc',
  'cfia.gdr.activity',
  'cfia.gdr.commodity',
  'cfia.gdr.include',
  'cfia.gdr.program',
  'citation_author',
  'citation_author_email',
  'citation_author_institution',
  'citation_conference_title',
  'citation_date',
  'citation_dissertation_institution',
  'citation_doi',
  'citation_firstpage',
  'citation_fulltext_html_url',
  'citation_isbn',
  'citation_issn',
  'citation_issue',
  'citation_journal_abbrev',
  'citation_journal_title',
  'citation_keywords',
  'citation_language',
  'citation_lastpage',
  'citation_pdf_url',
  'citation_publication_date',
  'citation_publisher',
  'citation_technical_report_institution',
  'citation_technical_report_number',
  'citation_title',
  'citation_volume',
  'citeseerxbot',
  'collection',
  'contact',
  'creator',
  'csrf-param',
  'csrf-token',
  'da_anonymiseip',
  'da_contactcompany',
  'da_contactemail',
  'da_contactfirstname',
  'da_contactlastname',
  'da_contactname',
  'da_contacttelephone',
  'da_conversioncurrency',
  'da_conversionid',
  'da_conversionvalue',
  'da_goalcurrency',
  'da_goalid',
  'da_goalvalue',
  'da_interactionselector',
  'da_pagerole',
  'da_pagetaxonomy',
  'da_pagetitle',
  'da_pageversion',
  'da_sessionid',
  'da_userid',
  'dc.created',
  'dc.creator',
  'dc.date.issued',
  'dc.datecopyrighted',
  'dc.datesubmitted',
  'dc.description',
  'dc.language',
  'dc.license',
  'dc.mediator',
  'dc.medium',
  'dc.modified',
  'dc.provenance',
  'dc.publisher',
  'dc.references',
  'dc.temporal',
  'dc.title',
  'dc.type',
  'dc.valid',
  'dcs.dcssta',
  'dcterms.abstract',
  'dcterms.accessrights',
  'dcterms.accrualmethod',
  'dcterms.accrualperiodicity',
  'dcterms.accrualpolicy',
  'dcterms.alternative',
  'dcterms.audience',
  'dcterms.available',
  'dcterms.bibliographiccitation',
  'dcterms.collection',
  'dcterms.conformsto',
  'dcterms.contributor',
  'dcterms.coverage',
  'dcterms.created',
  'dcterms.creator',
  'dcterms.date',
  'dcterms.dateaccepted',
  'dcterms.datecopyrighted',
  'dcterms.datesubmitted',
  'dcterms.description',
  'dcterms.educationlevel',
  'dcterms.extent',
  'dcterms.format',
  'dcterms.hasformat',
  'dcterms.haspart',
  'dcterms.hasversion',
  'dcterms.identifier',
  'dcterms.instructionalmethod',
  'dcterms.isformatof',
  'dcterms.ispartof',
  'dcterms.isreferencedby',
  'dcterms.isreplacedby',
  'dcterms.isrequiredby',
  'dcterms.issued',
  'dcterms.isversionof',
  'dcterms.language',
  'dcterms.license',
  'dcterms.mediator',
  'dcterms.medium',
  'dcterms.modified',
  'dcterms.provenance',
  'dcterms.publisher',
  'dcterms.references',
  'dcterms.relation',
  'dcterms.replaces',
  'dcterms.requires',
  'dcterms.rights',
  'dcterms.rightsholder',
  'dcterms.source',
  'dcterms.spatial',
  'dcterms.subject',
  'dcterms.tableofcontents',
  'dcterms.temporal',
  'dcterms.title',
  'dcterms.type',
  'dcterms.valid',
  'designer',
  'detectify-verification',
  'entity',
  'essaydirectory',
  'fdse-description',
  'fdse-index-as',
  'fdse-keywords',
  'fdse-refresh',
  'fdse-robots',
  'flblogauthor',
  'format-detection',
  'format-print',
  'fragment',
  'fsdatecreation',
  'fsdatepublish',
  'fsflcontent',
  'fslanguage',
  'fsonsitemap',
  'fspagedescription',
  'fspagename',
  'fssearchable',
  'fssection',
  'fswritertoolpagetype',
  'gcterms.topictaxonomy',
  'geo.a1',
  'geo.a2',
  'geo.a3',
  'geo.country',
  'geo.lmk',
  'geo.placename',
  'geo.position',
  'geo.region',
  'globrix.bathrooms',
  'globrix.bedrooms',
  'globrix.condition',
  'globrix.features',
  'globrix.instruction',
  'globrix.latitude',
  'globrix.longitude',
  'globrix.outsidespace',
  'globrix.parking',
  'globrix.period',
  'globrix.poa',
  'globrix.postcode',
  'globrix.price',
  'globrix.priceproximity',
  'globrix.tenure',
  'globrix.type',
  'globrix.underoffer',
  'go-import',
  'google',
  'google-play-app',
  'google-site-verification',
  'googlebot',
  'googlebot-mobile',
  'gwt:property',
  'handheldfriendly',
  'icas.datetime',
  'icas.datetime.abbr',
  'icas.datetime.day',
  'icas.datetime.long',
  'icbm',
  'ie_rm_off',
  'itemsperpage',
  'keywords-not',
  'license',
  'license:uri',
  'meta_date',
  'microtip',
  'mobile-agent',
  'mobile-web-app-capable',
  'mobileoptimized',
  'msapplication-config',
  'msapplication-navbutton-color',
  'msapplication-notification',
  'msapplication-square150x150logo',
  'msapplication-square310x310logo',
  'msapplication-square70x70logo',
  'msapplication-starturl',
  'msapplication-tap-highlight',
  'msapplication-task',
  'msapplication-tilecolor',
  'msapplication-tileimage',
  'msapplication-tooltip',
  'msapplication-wide310x150logo',
  'msapplication-window',
  'mssmarttagspreventparsing',
  'msvalidate.01',
  'nonfiction',
  'norton-safeweb-site-verification',
  'origin',
  'origin-trials',
  'p:domain_verify',
  'page-version',
  'pingdom',
  'pinterest',
  'prism:alternatetitle',
  'pro',
  'pro-auth',
  'pro-auth-field',
  'pro-auth-fragment',
  'rating',
  'referrer',
  'repostusapikey',
  'resourceloaderdynamicstyles',
  'review_date',
  'revision',
  'revisit-after',
  'rights',
  'rights-standard',
  'robots',
  'rpuplugin',
  'rqid',
  'shareaholic:analytics',
  'shareaholic:article_author',
  'shareaholic:article_author_name',
  'shareaholic:article_modified_time',
  'shareaholic:article_published_time',
  'shareaholic:article_visibility',
  'shareaholic:drupal_version',
  'shareaholic:image',
  'shareaholic:keywords',
  'shareaholic:language',
  'shareaholic:outstreamads',
  'shareaholic:shareable_page',
  'shareaholic:site_id',
  'shareaholic:site_name',
  'shareaholic:title',
  'shareaholic:url',
  'shareaholic:wp_version',
  'signet:authors',
  'signet:links',
  'skype_toolbar',
  'slurp',
  'startindex',
  'startver',
  'subject-datetime',
  'subject-system',
  'supported-media',
  'teoma',
  'theme-color',
  'thumbnail',
  'topper',
  'topper-major',
  'topper-minor',
  'totalresults',
  'translator',
  'twitter:app:country',
  'twitter:app:id:googleplay',
  'twitter:app:id:ipad',
  'twitter:app:id:iphone',
  'twitter:app:name:googleplay',
  'twitter:app:name:ipad',
  'twitter:app:name:iphone',
  'twitter:app:url:googleplay',
  'twitter:app:url:ipad',
  'twitter:app:url:iphone',
  'twitter:card',
  'twitter:creator',
  'twitter:creator:id',
  'twitter:data1',
  'twitter:data2',
  'twitter:description',
  'twitter:domain',
  'twitter:image',
  'twitter:image0',
  'twitter:image1',
  'twitter:image2',
  'twitter:image3',
  'twitter:image:height',
  'twitter:image:src',
  'twitter:image:width',
  'twitter:label1',
  'twitter:label2',
  'twitter:player',
  'twitter:player:height',
  'twitter:player:stream',
  'twitter:player:stream:content_type',
  'twitter:player:width',
  'twitter:site',
  'twitter:site:id',
  'twitter:title',
  'twitter:url',
  'typemetal.formatprefs',
  'verify-v1',
  'version',
  'vfb-version',
  'viewport',
  'web_author',
  'witget',
  'wot-verification',
  'wt.ac',
  'wt.ad',
  'wt.cg_n',
  'wt.cg_s',
  'wt.mc_id',
  'wt.si_n',
  'wt.si_p',
  'wt.si_x',
  'wt.sv',
  'wt.ti',
  'y_key',
  'yandex-verification',
  'zoomcategory',
  'zoomdescription',
  'zoomimage',
  'zoompageboost',
  'zoomtitle',
  'zoomwords'
]
