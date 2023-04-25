// ==UserScript==
// @name         Moodle Autologin
// @namespace    skoriop
// @version      0.1
// @author       skoriop
// @description  Autologin to Moodle using BITSMail.
// @match      	 https://accounts.google.com/o/*
// @match        https://cms.bits-hyderabad.ac.in/*
// @run-at       document-idle
// ==/UserScript==

"use strict";
switch (document.location.host)
{
	case "cms.bits-hyderabad.ac.in":
		document.querySelector("span.login a")?.click();
		document.querySelector(".login-identityprovider-btn")?.click();
		break;

	case "accounts.google.com":
		for (let ele of document.querySelectorAll("button"))
		{
			if (ele.innerText === "CMS - BITS Pilani Hyderabad Campus")
			{
				for (let ele of document.querySelectorAll("div"))
				{
					if (ele.innerText.includes("bits-pilani.ac.in") && !ele.innerText.includes("\n"))
					{
						setTimeout(() => ele.click(), 500);
						break;
					}
				}
				break;
			}
		}
}
