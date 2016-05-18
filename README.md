#### fontkanwarter

---

#Icon-Font Workflow
####Intro

Hello there! Good to have you designing icons for Zomato. This friendly guide here will bring you up to speed with the process we like to follow for designing, organising, maintaining and using icons embedded into our Zomato icon-font file. 

But before we begin, let’s have a quick look at the kind of stuff we’ll be dealing with.

---

##Glyph Types

###I. Icons

These are our regular use iconography occupants. They are used in navbars, tab bars, next to title texts, you get the idea. They’re usually rendered at small sizes of around 20px × 20px — 40px × 40px.

![My image](https://raw.githubusercontent.com/dilbertoid/fontkanwarter/master/Readme-Images/1-Icons.png)
_Examples of the ‘icon’ glyphs._

###II. Doodles

These aren’t icons per sé, but they’re in the Zombats icon-font file. They usually occupy empty state screens, and are rendered at large sizes.

![My image](https://raw.githubusercontent.com/dilbertoid/fontkanwarter/master/Readme-Images/2-Doodles.png)
_Examples of the ‘doodle’ style glyphs._

##JSON Files

![My image](https://raw.githubusercontent.com/dilbertoid/fontkanwarter/master/Readme-Images/3-Json-file.png)

Don’t worry, this is probably the simplest alphanumeric string you’ll ever write. 

![My image](https://raw.githubusercontent.com/dilbertoid/fontkanwarter/master/Readme-Images/4-Json-format.png)

A JSON file simply tells the icon-font which key each glyph is mapped to. Each line in the JSON file begins with the name of the glyph, and is followed by the ASCII code of the key that each glyph is mapped to.  

Think of it as the file that tells the icon-font that pressing “g” should display the “globe” icon. 

Okay, that’s pretty much all you’ll need to know (apart from your graphic design skills). So let’s proceed!

---

##0. Designing Icons

![My image](https://raw.githubusercontent.com/dilbertoid/fontkanwarter/master/Readme-Images/5-Sketch-artboard.png)

In the vector design software of your choice (Adobe Illustrator, Sketch, et.al.) start with an artboard of 32px × 32px.  

![My image](https://raw.githubusercontent.com/dilbertoid/fontkanwarter/master/Readme-Images/6-Show-pixels.png)

When designing icons, make sure you’re keeping an eye on the pixels (as opposed to the standard vector view). This will make sure you’re aware of your icon being displayed at small sizes on low resolution screens. 

####Key takeaways

- Start designing at 32px × 32px.
- Toggle pixel view to see how your icon is performing at lower resolutions.

---

##1. Organising Icons 

![My image](https://raw.githubusercontent.com/dilbertoid/fontkanwarter/master/Readme-Images/7-Organize.png)

When your icons are done, add them to the &lt;sketch&gt; file based on visual context. We’ll keep them here so that they’re all in one place, organised neatly for whenever we need them again.

Grouping by visual context means that icons that appear similar functionally are grouped together. For example, “numbers in circles,” or “glasses.”

####Key takeaways

- Group visually similar icons together.

---

##2. Exporting Icons 

![My image](https://raw.githubusercontent.com/dilbertoid/fontkanwarter/master/Readme-Images/8-Export.png)

When you’re exporting icons for icon-font use, make sure you’re exporting to SVG. Also, make sure that the name of the icon has been checked — that’s the name they’ll be exported as. So a group called “Icon 3” will be exported as “Icon 3.svg.”  

Icons that have already been prepped for SVG exporting will show a small knife on the right side of folder icon. 

####Key takeaways

- Verify the name of the icon group. 
- Export to SVG.

---

##3. Prepping for Icon-Font Export

![My image](https://raw.githubusercontent.com/dilbertoid/fontkanwarter/master/Readme-Images/9-Prepping.png)

3.1 Add your newly exported icon(s) to the &lt;JSON&gt; file. As previously mentioned, it’s just the name of the SVG icon in quotes, a colon, and the ASCII value it is to be mapped to. Always better to double check this value, and to make sure it’s not a duplicate. 

3.2 Put the exported SVG icons in the "exported" folder.

3.3 Upload to Git -> commit to master (and add relevant comments about the changes/uploads) -> sync.


####Key takeaways

- Add the newly created icon into the JSON file. 
- Make sure that the ASCII value you’ve entered is correct and verified. 

---

##4. Installation (for generating the icon-font file)

After pulling from the live repo, open **Terminal.**

Change your directory to wherever the downloaded github folder ("ZomatoFonts") is located. For example

```
cd /Users/<username>/<foldername>/ZomatoFonts
```

Then, run the following command

```
sudo npm install
```

And type in your password when prompted. 

Then, run the following command

```
sudo npm install grunt -g
```

Now run the following command. This command below will take a while. Sit back and relax.

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

```
At last, run the following command and you should be good to go.

```
brew install ttfautohint fontforge --with-python

```



###  Examples

To generate fonts for O2 please run the following command

```
grunt webfont:O2
```

To generate fonts for z-apps please run the following command

```
grunt webfont:zapps
```

To generate fonts for z-merchant please run the following command

```
grunt webfont:zmerchant
```

To generate fonts for z-web please run the following command

```
grunt webfont:zweb
```

---

##5. Obtain the Icon-Font File  

The icon-font folder will be generated inside the “generated” folder. It will be automatically placed inside subfolders following a date and time hierarchy. Make sure you’re getting the latest version by checking for the latest date and time folders. 

####Key takeaways

- The newly generated font will be placed inside the folder Generated&gt;[Date and time of running script]
- Make sure you’re getting the latest version (unless you specifically want an older one). Test it Out! 

Once your icon-font is all ready, check for any discrepancies in the “font-info.html” file, and then test it out on a device to see if everything is working all right. 

---

####Finally…

- Test your newly created icon font on a device to see if all the icons render correctly. 

---

That’s it, you’ve done a great job!


