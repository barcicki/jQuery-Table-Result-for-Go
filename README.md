jQuery Table Result for Go
================================

Description
---------------------------------------
This script was created to help reading table of results for Go (baduk) tournaments. 
When mouse is over any row in a table, other rows are highlighted of those players 
who played against the selected one. Opponents who won and lost are marked differently.

New:
Optionally user is allowed to click rows which results in hiding unrelevant information
(shows only players that target player played with).

Compatibility
------------------------------
So far, the script has been tested on OpenGotha results

Installation
---------------------------------------
The script needs jQuery to work. You can download it from [here](http://jquery.com) or you may include it your site using [Google apis](http://code.google.com/intl/pl/apis/libraries/devguide.html).

To include this script insert:
	<link href="resultTable.css" media="screen" rel="stylesheet" type="text/css" />
	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js"></script>
	<script type="text/javascript" src="jquery.resultTable.js"></script>
into your HEAD section.

Usage
------------------------------
To run this script on a page following code needs to be added:
	<script type="text/javascript">
		$(document).ready(function() {
			$("table").resultTable();
		});
	</script>
in a HEAD section, somewhere after the installation code

You can filter tables to which the script will apply by changing `$("table")` to `$("table.go-result")` or `$("#results")`.

The `resultTable()` function can take following parametres:

* `results` an array of strings how the results are presented
* `results_classes` an array of classes which to corresponds to results - in similar order
* `current_class` class assigned to selected player
* `game_class` class assigned to selected game
* `clickable` if true user can click rows which will result in showing only opponents
* `applyCursor` if true pointer would appear when hovering rows (can be achieved by css)

For example, running a script with default parametres:
	$("table").resultTable({
		results:			['+', 	'-', 	'='],
		results_classes: 	['won',	'lost', 'jigo'],
		current_class:		'current',
		game_class:			'game',
		clickable:			true,
		applyCursor:		true
	});
	
Requesting a Change
-------------------------------
You are welcome to request any new features or changes to the script. Just contact me via barcicki@gmail.com