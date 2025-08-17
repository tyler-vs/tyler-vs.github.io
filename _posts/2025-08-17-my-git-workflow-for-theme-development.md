---
layout: post
title: My Git Workflow for Theme Development
date: 2025-08-17 12:35:00 -0400
categories: [shopify, how-to, git, github, version-control]
comments: true
---

The GitHub CLI has been around for a while now and I wanted to share how I use it in my day-to-day work. While I can accomplish the same by using the GitHub website, this speeds up some of the processes.

It all begins with opening an issue with the `gh issue create` command. What is cool about this is that if you have issue templates configured in the repository then it will ask what template to use. For all of our repositories we have bug, featured, Shopify update or blank. After selecting the template, my text editor will open up with the placeholder content. I will pretend that I creating an issue, so my issue template.

> Pro-tip: If you open an issue and have fields that are not related to your issue, don't delete the fields, just leave them blank. This makes it easier if you have to come back and fill in information that you didn't have.

Once an issue if filled out and created, the GH CLI will return the URL for that issue, you can grab the issue number or if you cleared out the terminal you can use `gh issue list` to get a list of them. Next I will need to make a branch, I actually like GitHub to do this for me. With the issue ID number, I run `gh issue view 123 -w` to open the issue in GitHub. I look at the right side sidebar and see a development section, from there I can click "Create a branch".

<img width="592" height="240" alt="Image" src="https://github.com/user-attachments/assets/54c21771-c175-4453-9ec2-e44feb148e03" />

This will open a popup with a string that you can copy, it should something like this: `1324-move-product-blocks-into-snippets`, it makes the issue title into "kabab-case" without me having to do that.

<img width="960" height="824" alt="Image" src="https://github.com/user-attachments/assets/2fdd2737-9dad-4909-8274-405f5198a8e5" />

I go back to VSCdoe's terminal and prepare to make a branch to work on the bug fix. I could just paste in the value that I had copied from GitHub but I actually have a workflow where I prepend a word to the string to help organize the branches. I use `fix/`, `featuere`  and `task` which reflects the type of issue I opened. Since this is a bug I prepend with `fix/` so it looks like this `fix/1324-move-product-blocks-into-snippets`. Great, I run `git checkout -b fix/1324-move-product-blocks-into-snippets` to start working on the branch.

I make changes to the code via commits. I strive to make sure that each commit still makes the code work, I try to avoid any commits which break the code. When I am all done, I push without the CLI `git push -u origin fix/1324-move-product-blocks-into-snippets`. From here we need to make the PR. There is always a few ways we can go about this. Usually I will use the CLI with `gh pr create` to do it however I actually like using the GH VSCode app to create the PR because then I can choose the base branch (perhaps you can do this on the GH CLI but I haven't looked into it.) Once the PR is open it should go into code review which can take some time. While waiting a cool trick is that you can checkout other PRs if they are a work in progress. Instead of using git to checkout a branch I use `gh pr list` to list the other PRs that I am working on, grab the ID number and use `gh pr checkout ###`. This is nice when you have a ton of branches locally.

> Pro-tip: My other workflow for finding branches is simply using `git branch` to list all the branches. You can then press the forward slash `/` and type in to search for a specific branch. This is why I like to prepend my branch names with words that you can filter with like `featured`.

<img width="772" height="565" alt="Image" src="https://github.com/user-attachments/assets/c3eabab0-6b00-4773-b345-b5dd9b6c00f9" />

The last thing to do is merge that PR into the development branch. With the GH CLI I simply run a `gh pr merge ###` to merge it in. It will give you options to merge commit, rebase or squash, I usually go for squash to make the history linear. It also asks you whether to keep a local copy of the branch, I love this feature, since then I do not have to manually delete the branch, the GH CLI does it for me!

Now we can do some cleaning up. I run `gh issue edit issue-id` to change the labels to `committed` so we know where an issue stands and call it a day!

I think that the GH CLI is an amazing tool that seriously speed up workflows so that you can focus on actual coding and solving problems.