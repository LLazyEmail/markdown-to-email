<!-- Copy and paste the converted output. -->

<!-----
NEW: Check the "Suppress top comment" option to remove this info from the output.

Conversion time: 0.636 seconds.


Using this Markdown file:

1. Paste this output into your source file.
2. See the notes and action items below regarding this conversion run.
3. Check the rendered output (headings, lists, code blocks, tables) for proper
   formatting and use a linkchecker before you publish this page.

Conversion notes:

* Docs to Markdown version 1.0β29
* Sun Oct 11 2020 00:16:26 GMT-0700 (PDT)
* Source doc: Can We Make Data Tidy
* Tables are currently converted to HTML tables.
----->

**Can We Make Data Tidy?**

Imagine: You are going to sit down with a newly-fetched [data set](https://hackernoon.com/rare-datasets-for-computer-vision-every-machine-learning-expert-must-work-with-2ddaf52ad862), excited about the insights it will bring you and then you find out it is no use. If you’ve been there, then you know for sure what an [untidy dataset](https://hackernoon.com/tagged/dataset) is.

A statistician from New Zealand once said: Tidy [datasets](https://hackernoon.com/tagged/datasets) are all alike, but every messy dataset is messy in its own way. Indeed, as data may come in various forms and shapes, sometimes we are inundated with it. As a result, our data science team becomes shortsighted and oops.. disillusioned by mountains of [unworkable data](https://hackernoon.com/why-i-decided-to-bring-a-new-cloud-data-warehouse-to-market-dt1d3wqa). The only way data [specialists can facilitate analysis](https://hackernoon.com/tensorflow-vs-keras-comparison-by-building-a-model-for-image-classification-f007f336c519) is by keeping data clean and organized.

**What is tidy data?**

Essentially, tidy data is a term coined by Hadley Wickham in his Tidy Data paper (remember that statistician from NZ?). He defined tidy data as data that is neatly organized and all [set for analysis](https://hackernoon.com/introducing-theholopix50k-dataset-for-image-super-resolution-l95k3unm). This way of organizing allows you to easily produce charts, diagrams, and [summary statistics](https://hackernoon.com/how-this-open-litter-database-will-save-the-planet-iy2e3u3p). As it often happens, not all data comes out of the database clean, therefore [cleansing it is essential](https://hackernoon.com/five-undervalued-data-points-for-emerging-businesses-5c2w3eun) to efficiently analyze it.

Without further ado, let us break down the principles that allow you keep your data nice and clean.

**Tidy Data Principles**

**1. Each row is an observational unit.**

![alt_text](https://github.com/atherdon/newsletters/blob/master/archive/img/memes/october/4/7.jpg "image_tooltip")




We’ll start with one of the basic principles. When you are giving your data the once-over, you should make sure each row [contains an observation](https://hackernoon.com/the-art-of-data-storytelling-how-to-make-your-data-impactful-wa2b3ywd).

By definition, observation is the individual unit under question. If we look at the table above, an observational unit could be called ‘people’. You can see that each person has an individual row on the table and all of the information for that person is in the same row.  Observations are included in rows, variables are represented as columns and there is only one observational unit per table. Now THIS is tidy data.

**2.  Each column is a variable.**

A variable is the unit you are assessing. Again, if we turn to our table above, age, hair_color and height fall within the [category of variables](https://hackernoon.com/top-10-best-web-scraper-and-data-scraping-tools-yn453ymy). In tidy data each variable is represented in a separate column.

Okay, now a one-second quiz: What is wrong with this dataset?


![alt_text](https://github.com/atherdon/newsletters/blob/master/archive/img/memes/october/4/7.jpg "image_tooltip")





Yep, you guessed it right. Never put multiple variables in one column, [otherwise your data analysis is doomed](https://hackernoon.com/getting-started-with-data-visualization-building-a-javascript-scatter-plot-module-0s653yzm).

**3. Each cell is a value.**

If you have got hold of the first two principles, this one [should already be a no-brainer](https://hackernoon.com/creating-a-dataset-sucks-heres-what-ive-learned-to-make-it-a-little-bit-easier-5av3ed1). Anyway, we’ll make an extra effort to lay it all out. Each cell should contain only one value. It is also important that all values in the same column are formatted the same way.


![alt_text](https://github.com/atherdon/newsletters/blob/master/archive/img/memes/october/4/7.jpg "image_tooltip")





On this data set, you can see that we have a table with four variables and three observations. Each cell contains one piece of information and [our values all match](https://hackernoon.com/image-segmentation-architectures-losses-datasets-and-frameworks-sh7e32f4). All of our age values are digits, hair color values are whole words – you got the idea. Therefore, this [dataset is tidy and almost fit for analysis](https://hackernoon.com/document-classification-process-7-pragmatic-approaches-for-small-datasets-c35k3y48).

**4. Each column has a unique name.**

[In an ideal dataset](https://hackernoon.com/google-search-console-now-reports-on-more-types-of-structured-data-w8203eii), columns should have specific and descriptive names. Let us demonstrate you an example of this principle.


![alt_text](https://github.com/atherdon/newsletters/blob/master/archive/img/memes/october/4/7.jpg "image_tooltip")




The third column is labeled hair_color. This is a more specific heading that if we were simply to call it – hair. The word ‘hair’ can refer to anything from hair length to hair style. This [level of specificity](https://hackernoon.com/how-to-monitor-a-forum-for-keywords-using-python-and-aws-lambda-0s3k3y44) will help you speed up the analysis process.

**The Final Word**

Tidy data is an [essential part](https://hackernoon.com/can-data-automation-transform-the-workplace-v6ae3zvr) of realizing the full data potential that exists. [Once your data is tidy](https://hackernoon.com/improve-your-ai-training-data-using-self-agreement-protocols-4x93to8), it can be used as input into a wide range of other functions.

While we are still on this topic, we’d like to say a big thank-you to our sponsor. [Flatfile](https://bit.ly/3kPloFW) Portal is the elegant import button for web apps that integrates in minutes, and makes sure your spreadsheets are clean and ready to use.
