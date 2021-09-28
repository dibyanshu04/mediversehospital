/**
 * @package 	WordPress Plugin
 * @subpackage 	CMSMasters Events Schedule
 * @version		1.0.0
 * 
 * CMSMasters Events Schedule Scripts
 * Created by CMSMasters
 * 
 */


"use strict";

jQuery(document).ready(function() { 
	/* Events Schedule Tabs */
	(function ($) { 
		$('.cmsmasters_events_schedule_tabs .cmsmasters_events_schedule_tabs_list > li:first-child').addClass('current_tab');
		$('.cmsmasters_events_schedule_tabs .cmsmasters_events_schedule_tabs_items > div:first-child').addClass('active_tab');
		
		$('.cmsmasters_events_schedule_tabs .cmsmasters_events_schedule_tabs_list a').on('click', function (t) { 
			var tabs_list = $(this).closest('.cmsmasters_events_schedule_tabs_list'), 
				tabs_list_item = $(this).closest('li'), 
				tabs_items = tabs_list.next('.cmsmasters_events_schedule_tabs_items'), 
				index = tabs_list_item.index();
			
			
			tabs_list.find('> .current_tab').removeClass('current_tab');
			
			
			tabs_list_item.addClass('current_tab');
			
			
			tabs_items.find('> div').not(':eq(' + index + ')').slideUp('fast', function () { 
				$(this).removeClass('active_tab');
			} );
			
			
			tabs_items.find('> div:eq(' + index + ')').slideDown('fast', function () { 
				$(this).addClass('active_tab');
			} );
			
			
			t.preventDefault();
		} );
	} )(jQuery);
} );

