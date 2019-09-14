---
layout: post
title: "How to send a “welcome” email with coupon code for when a user subscribes using ShopSync and MailChimp."
date: 2019-09-14 15:35:00 -0400
categories: [shopify, how-to]
comments: true
---

Having a subscription email can be beneficial to merchants and customers. Not only does it collect a customer’s email address for future promotions and communication, it also can be use to send a customer a coupon code so that they are more likely to make a purchase. 

If your theme supports a way to capture email addresses that go to the store's customer section then we can use MailChimp to send them a “welcome” email with a coupon code.

## Getting Setup

First create a MailChimp account, [MailChimp](https://mailchimp.com) is a marketing automation platform and email marketing service. Under its free plan we can have 2,000 contacts (subscribers) which we can send email campaigns to and send 10,000 monthly emails. 

Install the [ShopSync](https://apps.shopify.com/shopsync-2) to your Shopify store. MailChimp used to have an app that could sync customer data on Shopify to a MailChimp account, unfortunately this is no longer the case and we need to install ShopSync to sync the customers to MailChimp. 

Once the ShopSync app is installed, go to the app's settings and enter your MailChimp account so that they sync.

## Create a Discount code in Shopify. 

Read this guide on how to create a [discount code](https://help.shopify.com/en/manual/promoting-marketing/discount-codes/create-discount-codes) in Shopify. It may be better to create a discount code as opposed to an "automated discount". Can use the "Customer eligibility" option to limit the coupon to only email subscribers.

## Create a "Campaign" in MailChimp 

If not already, sign into MailChimp and create a "Campaign", choose the "Email" option then choose the "Automated" option then choose the "Welcome new subscribers" option. Choose the "Single email" option and give the campaign a name. Finish by clicking "Begin".

## Add coupon code to the email template.

After clicking "Begin" the next screen in MailChimp allows to modify the email that will be sent (i.e. the content, subject, sender) from here choose to edit the "Content" by clicking "Edit design". From here use tools to add the coupon to the email.

## Click "Start Sending" to initiate the campaign.

From now on, when users subscribe they will receive this "welcome" email with the coupon code.