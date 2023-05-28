# firstclass frontend findout

Hello and thanks for trying out with us!

You will find here a few tests. These are composed of some basic yet bit challenging problems we've had to solve on the job.
This will also allow you to have a glimpse of what we work on at 99 GROUP and see if that's interesting to you.
Finally, this'll provide us with insights on your working style.

## Submission

You have 2 days to complete the challenge. Though realistically, this shouldn't take you more than 4 hours.

Please fork this and once you complete, send us back the forked link to choonhoong@99.co, dian.baghawan@99.co, ilmiyantif@99.co, priyandiono@99.co.

As an alternative, you can do the challenge in a Next.js environment, publish it to Vercel and send the public repository link instead.

## Challenges

### Mandatory

1. Implement the [following design](https://www.figma.com/file/zT67hKBce1jfyZPkx5cGrg/FE-challenge---Project-card-design).

Notes:

- You will have to register on Figma if you don't already have an account

- Use the url provided in the src/index.js as the API endpoint

2. Hide description until the button is clicked, but because of SEO we want to only hide description after page load. In other word, web crawler should be able to read the description (minus the phone number, detail on #3), regular user on browser should see be able to see it after the button is clicked.

3. Anonymize all phone numbers: first 4 numbers visible, replace following 4 with X (e.g. 8111 XXXX or 8123 XXXX)

Note:

- Singapore phone number format is always 8 numbers long.
- See [Number Ranges on wikipedia](https://en.wikipedia.org/wiki/Telephone_numbers_in_Singapore#Number_ranges) for precise rules.

4. Clicking on each phone number reveals its real number

5. Line returns (new lines) in the description text should be displayed on page. The text must NOT be all in one line.

### Bonus points

1. Main pic is too heavy, please suggest ways to reduce its weight.
2. We are looking for a first-class front-end, so please implement ways to improve the end result, clues: (but not limited to) performance, UX, DX.