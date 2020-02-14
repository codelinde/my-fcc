# RegEx Notes

`/` indicates beginning of regular expression  
`/` indicates end of regular expression  
So, everything between `/` and `/`  

You can put as much as you want, so `/cat/` would match on 'Cathy' but not on 'tack' ; e.g. the string must contain the exact expression within the slashes to match

`|` (pipe) can be used to indicate OR  
`/1|2|3/.test(“123”)` evaluates as `true`  
`.test(“31”)` also evaluates as `true`

We can also just put characters between brackets `[]`  
`/[123]/.test(“123”)` and `.test(“31”)` evaluates as `true`

To avoid typing each number in the range, we can instead type `/[1-3]/`  
Also works for ranges of letters

`[0-9]` can also be written `\d` (remember this would just match a single digit)  
Non-numerical characters are `\D`  
Alphanumeric characters are `\w` (this includes underscore `_`)   
Non-alphanumeric are `\W`  
Whitespaces are `\s`  
Non Whitespaces are `\S`  
`\n` new line

`^` indicates the start of a string  
`$` indicates the end of a string

So, `/^b/.test(“bee”);` evaluates as `true`, but `.test("Abe")` does not  
In short, the character after `^` must be at the start of the string in order for the statement to be true

Similarly, `/ee$/.test("bee")` evaluates as `true`, but `.test("eek")` does not  

`/^[0-9]$/` means “Go to the start of the string and look for a single numeral between 0 and 9..this numeral is also the ending of the string”.

`?` means 0-1 instances (take it or leave it)  
`+` means 1+ (I need at least 1)  
`*` means 0+ is a bit of a combination of the above, indicating none, one, or more than one

Matching a hexadecimal `/#?\w\w\w\w\w\w/`



