Compiler Design Lab: Lexeme Checking and Lexical Analyzer
This project provides a collection of C programs and a Lex program to help in the analysis of lexemes and their classification. The programs focus on detecting different types of lexemes, such as integer constants, identifiers, and keywords, which are essential elements in a compiler design process. Additionally, it includes a basic implementation of a lexical analyzer using Lex and a tool to convert regular expressions to non-deterministic finite automata (NFA).

Features
P1: Check if Lexeme is Integer Constant
This C program checks whether the input lexeme is an integer constant by verifying if all characters in the string are digits.

P2: Check if Lexeme is Identifier
This C program checks if a lexeme is a valid identifier. It ensures that the lexeme starts with an alphabetic character or an underscore and is followed by a combination of alphanumeric characters or underscores.

P3: Check if Lexeme is Keyword
This C program checks if a lexeme matches any of the predefined C keywords. It compares the lexeme against a list of 32 C keywords to determine if it is a valid keyword.

P4: Lexical Analyzer Using Lex
This Lex program demonstrates the basics of lexical analysis by identifying C language tokens like keywords, identifiers, numbers, and operators. The program is implemented using Lex and processes a C source file to display identified lexemes with appropriate labels.

P5: Convert Regular Expression to NFA
This C program converts a regular expression into a Non-deterministic Finite Automaton (NFA). It reads a regular expression and constructs a transition table for the NFA, which is useful for understanding lexical analysis and regular expression matching.

Setup Instructions
To run the programs:

For P4 (Lexical Analyzer using Lex), you will need to compile the lexp.lex file using flex:
Run flex lexp.lex
Then compile using gcc lex.yy.c
Run the program with ./a.out sample.c, where sample.c is the C source file to analyze.
Purpose
This repository serves as an educational tool for learning about compiler design, particularly the process of lexical analysis, and understanding how to identify and categorize lexemes in programming languages. It covers a range of topics, including basic lexical structure recognition and the implementation of a lexical analyzer using Lex.

### Visit the Project Webpage

You can view the project live on the web by clicking the link below:

Compiler Lab Website : (https://udayan-mal.github.io/Compiler-lab/)

