class Language {
  constructor(name, extension, code, sampleCode) {
    this.name = name;
    this.extension = extension;
    this.code = code;
    this.sampleCode = sampleCode;
  }
}

let cpp = new Language(
  "C++",
  ".cpp",
  "cpp",
  `#include<iostream>
using namespace std;

int main(){
    cout << "Hello World";
    return 0;
}`
);

let python = new Language("Python", ".py", "python", `print("Hello World")`);

let java = new Language(
  "Java",
  ".java",
  "java",
  `public class Main {
      
    public static void main(String[] args) {
        System.out.println("Hello, World!"); 
    }
    
}`
);

let ruby = new Language(
  "Ruby",
  ".rb",
  "ruby",
  `puts "Hello World"`
);

let swift = new Language(
  "Swift",
  ".swift",
  "swift",
  `print("Hello, World!") `
);

let kotlin = new Language(
  "Kotlin",
  ".kt",
  "kotlin",
  `fun main(args: Array<String>) {
    println("Hello, World!")
}`
);

export const languages = [cpp, python, java, ruby, kotlin, swift];
