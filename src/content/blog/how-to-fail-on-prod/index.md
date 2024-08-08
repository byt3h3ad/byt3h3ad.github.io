---
title: "How to Cook and Fail on Prod"
description: "How a bunch of nerds cooked a bunch of nerdy shit and failed"
date: "Aug 1 2024"
draft: true
---

It's college elections season. Things are pretty charged in the campus right now. Being seniors now, all the key people in the elections are our friends. The election debate was in a few hours and the candidates were getting ready. The close set of friends I keep, we're apolitical. We stay away from the negativity.

## Using bat

Like `cat`, `bat` works in the same way so all you have to do is type in `bat filename`. Do note that on some distros like Ubuntu and Debian it is called `batname` to avoid a name clash with another package. You can create an alias to define it back to `bat`.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1686860954887/d38f579c-b726-437a-8fce-390f0c297000.png)

The decorations can be turned off with `-n` to display only line numbers.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1686860980856/3192e113-9101-4a25-98c2-0aab44932060.png)

There are tons of different features like printing a specified range of lines, setting themes, adding or changing filetype associations, adding new language definitions and changing output styles. It works with several other tools like `xclip`, `fd`, `git diff` to enhance their results. To get a list of all the options and commands, run `cat --help` or `man cat` and look at their [docs](https://github.com/sharkdp/bat#how-to-use).

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1686860797765/07f5ad86-abd6-4463-8634-aa21cf3cce57.png)

The `git` integration allows you to see modifications in the file with respect to the index.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1686861100739/6aa9d468-92ed-4b29-b989-5ff1454ef0de.png)

All your configurations are saved neatly in a config file. To find the path to your `bat.conf` and make changes to it, run `bat --config-file`.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1686861089211/d43e5ed0-c394-4869-a759-2e77758ed0b6.png)

`bat` is a cool, useful, and really fast tool for you to try out and maybe even switch to. A shoutout to the author [sharkdp](https://github.com/sharkdp) who has also authored popular and open-source tools like [fd](https://github.com/sharkdp/fd), [hyperfine](https://github.com/sharkdp/hyperfine), [pastel](https://github.com/sharkdp/pastel) and many, many more. Check out his [website](https://david-peter.de/) and you will surely find something useful for you!

That's all I have for you today and I will see you in the next one.
