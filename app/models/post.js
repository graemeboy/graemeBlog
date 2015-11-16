var posts = [
{
  slug: 'stress-management-for-startup-engineers',
  title: 'Stress Management for Startup Engineers',
  cat: 'coding',
  tags: ['startups']
},
{
  slug: 'perceptual-control-theory-in-neuroscience',
  title: 'Introduction to Perceptual Control Theory',
  cat: 'psychology',
  tags: ['perceptual control theory', 'psychology', 'neuroscience']
},
{
  slug: 'simple-javascript-closure',
  title: 'A Simple Explanation of JavaScript Closures',
  cat: 'coding',
  tags: ['javascript']
},
{
  slug: 'computer-science-art-not-science',
  title: 'Computer Science is an Art - Not a Science',
  cat: 'coding',
  tags: ['computer science']
},
{
  slug: '7-easy-interview-questions',
  title: '7 Easy Coding Interview Questions',
  cat: 'coding',
  tags: ['interviews', 'javascript', 'algorithms']
},
{
  slug: 'fibonacci-sequence',
  title: 'Fibonacci Sequence in JavaScript',
  cat: 'coding',
  'tags': ['javascript', 'algorithms']
},
{
  slug: 'review-continuous-integration',
  title: 'Book Review: Continuous Integration: Improving Software Quality and Reducing Risk',
  cat: 'coding',
  'tags': ['book review', 'development process']
},
{
  slug: 'search-matrix',
  title: 'Search an Ordered 2D Matrix',
  cat: 'coding',
  'tags': ['javascript', 'algorithms']
},
{
  slug: 'filename-suffix',
  title: 'Append String to Multiple Filenames Before Extension on Command Line',
  cat: 'coding',
  'tags': ['unix', 'bash']
},
{
  slug: 'string-permutations',
  title: 'Compute All Permutations of a String in JavaScript ',
  cat: 'coding',
  'tags': ['javascript', 'algorithms']
},
{
  slug: 'longest-common-subsequence',
  title: 'Longest Common Subsequence in JavaScript',
  cat: 'coding',
  tags: ['javascript', 'algorithms']
},
{
  slug: 'spiral-matrix',
  title: 'Spiral Traverse a Matrix',
  cat: 'coding',
  tags: ['javascript', 'algorithms']
},
{
  slug: 'writing-software',
  title: 'How to Write Best Selling Software',
  cat: 'coding',
  tags: ['software design']
},
{
  slug: 'surviving-san-francisco',
  title: 'How I Survived as a 20-year-old Tourist in San Francisco',
  cat: 'personal',
  tags: ['lifestyle']
},
{
  slug: 'natural-language-clock',
  title: 'Natural Language Javascript Clock',
  cat: 'coding',
  tags: ['fun', 'javascript']
},
{
  slug: 'bulk-convert-progressive-jpeg',
  title: 'Bulk Convert Images to Progressive JPEG',
  cat: 'coding',
  tags: ['performance', 'unix']
},
{
  slug: 'wp-fast-search',
  title: 'WP Fast Search - Plugin',
  cat: 'coding',
  tags: ['wordpress']
},
{
  slug: 'css-table-styles',
  title: 'Beautiful CSS for Tables',
  cat: 'coding',
  tags: ['css', 'design']
},
{
  slug: 'stoic-sentence-completion',
  title: 'Stoic Sentence Completion Exercises',
  cat: 'psychology',
  tags: ['stoicism', 'sentence completion']
},
{
  slug: 'beautiful-2',
  title: 'Beautiful Moment #2 - Enough',
  cat: 'beautiful moments',
  tags: ['happiness', 'enough']
},
{
  slug: 'beautiful-1',
  title: 'Beautiful Moment #1 - Freedom and Oneness',
  cat: 'beautiful moments',
  tags: ['happiness', 'oneness', 'nature']
},
{
  slug: 'joy',
  title: 'The Joy Supplement',
  cat: 'psychology',
  tags: ['happiness', 'positive psychology', 'sentence completion']
},
{
  slug: 'problematic-coding-interviews',
  title: 'The Problem with Technical Interviews',
  cat: 'coding',
  tags: ['hiring', 'interviews']
},
  {
    slug: 'keypad-problem',
    title: 'The Keypad Problem',
    cat: 'coding',
    tags: ['algorithms', 'javascript']
  },
  {
    slug: 'coding-style',
    title: 'On the Important of Coding Style',
    cat: 'coding',
    tags: ['style']
  },
  {
    slug: 'habit-vs-creativity',
    title: "Habit vs Creativity?",
    cat: 'psychology',
    tags: ['habit', 'creativity']
  },
  {
    slug: 'social-drinking-genetic',
    title: "Social Drinking - It's in Your Genes",
    cat: 'psychology',
    tags: ['genetics', 'alcohol']
  },
  {
    slug: 'sum-1000-primes',
    title: 'Sum the First 1000 Primes',
    cat: 'coding',
    tags: ['algorithms', 'javascript']
  },
  {
    slug: 'flat-file-blogging',
    title: 'Why Flat-File Blogs Make the Most Sense to Me',
    cat: 'coding',
    tags: ['CMS']
  },
  {
    slug: 'chars-string-unique',
    title: 'Check if the Characters in a String are Unique (Five Approaches)',
    cat: 'coding',
    tags: ['algorithms', 'javascript']
  },
  {
    slug: 'nodejs-chat-app',
    title: 'Build a Chat App in Node.js with Socket.io',
    cat: 'coding',
    tags: ['node.js']
  },
  { slug: 'node-child-processes',
    title: 'Node.js External and Child Processes',
    cat: 'coding',
    tags: ['node.js']
  },
  { slug: 'validating-https-nodejs',
    title: 'Validating HTTPS Connections in Node.js',
    cat: 'coding',
    tags: ['node.js']
   },
  { slug: 'node-udp',
    title: 'Sending UDP Datagrams with Node.js',
    cat: 'coding',
    tags: ['node.js']
   },
  { slug: 'nuts-bolts-problem',
    title: 'The Nuts and Bolts Problem (An Approach)',
    cat: 'coding',
    tags: ['algorithms', 'javascript']
  },
  { slug: 'node-fs',
    title: 'Using the Node.js FS Module',
    cat: 'coding',
    tags: ['node.js']
   },
  {
    slug: 'frontend-crawler',
    title: 'How to Build a Frontend Web Crawler',
    cat: 'coding',
    tags: ['javascript', 'webcrawler']
   },
  {
    slug: 'php-vs-node',
    title: 'PHP vs Node.js',
    cat: 'coding',
    tags: ['PHP', 'node.js']
  },
  { slug: 'logout-button-css',
    title: 'Logout Buttons with CSS',
    cat: 'coding',
    tags: ['CSS']
   },
  { slug: 'software-cliche',
    title: 'Design Pattern or Cliché?',
    cat: 'product',
    tags: ['UX']
  },
  { slug: 'modern-css-buttons',
    title: 'Modern CSS Buttons',
    cat: 'coding',
    tags: ['CSS']
   },
  { slug: 'php-good',
    title: 'PHP is a Good Language',
    cat: 'coding',
    tags: ['PHP']
   },
  { slug: 'css-buttons',
    title: '12 Professional CSS Buttons',
    cat: 'coding',
    tags: ['CSS']
   },
  { slug: 'wordpress-plugins',
    title: '6 Tips for Building Premium Wordpress Plugins',
    cat: 'coding',
    tags: ['Wordpress']
   },
  { slug: 'how-to-hide-that-you-use-wordpress',
    title: 'How to Hide that You Use Wordpress',
    cat: 'coding',
    tags: ['Wordpress']
   },
  { slug: 'jan-smuts-legacy',
    title: 'The Legacy of Jan Smuts in South Africa',
    cat: 'travel',
    tags: ['Africa']
   },
  { slug: 'entertainment-luxury',
    title: 'Entertainment is Not a Luxury',
    cat: 'travel',
    tags: ['Africa', 'poverty']
   },
  { slug: 'market-identity',
    title: 'How to Use Market Segmentation and Discover Your Business\' Core Identity',
    cat: 'product',
    tags: ['business']
   },
  { slug: 'trends-fads',
    title: 'Trends, Fads, and Recognizing the Difference',
    cat: 'product',
    tags: ['trends']
   },
  { slug: 'google-web-designer-review',
    title: 'Google Web Designer First Impressions: Review',
    cat: 'product',
    tags: ['review']
   },
  { slug: 'gender-graduation',
    title: 'Women are Outperforming Men - Confirmation from Commencement Day',
    cat: 'psychology',
    tags: ['gender']
   },
  {
    slug: 'habits',
    title: 'Habit Formation',
    cat: 'psychology',
    tags: ['habits', 'positive psychology']
   },
  { slug: 'gendered-graffiti',
    title: 'Collaborative vs. Depreciative Genders: Analysis of Bathroom Graffiti ',
    cat: 'psychology',
    tags: ['gender']
   },
  { slug: 'neuromarketing',
    title: 'What is Neuromarketing?',
    cat: 'psychology',
    tags: ['neuroscience']
   },
  { slug: 'gurus',
    title: 'The Modern Guru',
    cat: 'psychology',
    tags: ['leadership']
   },
   {
    slug: 'titleizer',
    title: 'Online Titleizer',
    cat: 'tools',
    tags: ['javascript','titleizer']
  }

];

exports.allPosts = posts;
