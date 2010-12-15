NetSling
========

NetSling is a simple extension for Firefox that works with del.icio.us to give you quick keyboard access to google searches and any of your online bookmarks, from anywhere.

Here's how it works: Anytime you're browsing the web, you can hit CTRL-SHIFT-m to bring up a prompt where you can enter a google search or a NetSling command. You can type simple words for your online bookmarks (like 'mail' to jump to GMail), or you can set up active bookmarks to run searches on websites you use often (like 'imdb John Cusack').

Once you start using NetSling, you'll wonder how you managed without it! 

Getting Started
---------------

Before using NetSling, you should have a del.icio.us account.  Get one.  All the cool kids are doing it.

The best way to figure out NetSling is to try some of the built-in searches, then try experimenting with setting up your own aliases and searches using the *call*, *save*, and *edit* commands.

Hotkey
------

The NetSling hotkey is CTRL-SHIFT-m.  This brings up a simple dialog where you enter NetSling commands and google searches.

Default (Google Search) Command and Modifiers
---------------------------------------------

*Default Command (Google Search)*

* If the first word of what you enter doesn't match any commands, it automatically sends a search to google.  What if you want to search google for something that starts with a command name (like "save the whales")?  Simply begin it with a quote.

*Modifier "!" (I'm Feeling Lucky)*

* If you're doing a search and it ends with !, it automatically jumps to google's first result for that.  This is surprisingly useful.  For example, digg! takes you to digg.com.

*Modifier "&" (Launch in Another Tab/Window)*

* You can end any command or search with "&" and it will launch in other window or tab (whichever you've configured).  This can be used in conjunction with "!".

Built-In Commands
-----------------

*Core Commands*

  * *call* _alias_ - gives an alias to the current webpage and saves it to your del.icio.us bookmarks.
  * *pcall* _alias_ - same as above, but saves it privately (no one else can see it on del.icio.us).
  * *save* - saves the current webpage to your del.icio.us bookmarks.
  * *edit* - edits the information for the current page in your del.icio.us bookmarks.
  * *reload* - refreshes your aliases from your online del.icio.us bookmark data.
  * *help* - takes you to this page

*Searches*

  * *ebay* _query_ - Ebay query
  * *imdb* _query_ - IMDB query (actors, movies, etc)
  * *img* _query_ - google image search
  * *map* _place_ - google maps query
  * *weather* _zipcode_ - shows the weather.com forecast for the given zipcode
  * *youtube* _query_ - youtube video search

*Special*

  * *=*_expression_ - If the command starts with _=_, it's evaluated as a simple math expression.  For example, try entering _=(456+2)/3_

Launching in Tabs vs. Windows, Etc.
-----------------------------------

Click on the butterfly in the statusbar of your browser and open the Options menu to change launching behavior.  If you normally have NetSling opening pages in the current tab (the default behavior), you can end any command with an ampersand to say "Just for this command, I want to pop up a new tab (or window, if that's the way you've configured it in the options).

Making Your Own Search Commands
-------------------------------

Currently, this isn't an easy process for non-geeks, but it's still cool.

To make your own search commands, run a query for "something" on the actual website, then run *call mysearch*.  Then run *edit*.  In the edit screen, put _$1_ in the place of "something" (what you searched for).  Once you do this, you can easily run queries against that site at any time by entering *mysearch apples*.  And since the information is saved to del.icio.us, from then on you can do it from anywhere you have Firefox w/NetSling installed.
