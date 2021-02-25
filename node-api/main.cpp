#include <bits/stdc++.h>
#include <iostream>

using namespace std;
set<string> data_type, condition, loop, Array;
set<char> useless, bracket;
map<string, string> map_variable, keyword, condmap;
int indent;
ofstream outFile("output.txt", ios::out);

void intialize() //Create mapping for different elements of code i.e variables, datatypes, words that are of no use etc.
{
    /* store the appropriate keyword in appropriate set*/
    data_type = {"int", "float", "string", "char", "double"};
    useless = {'<', '>', ';', ',', ' ', '"', '('};
    condition = {"if", "else"};
    loop = {"for", "while", "do"};
    keyword = {{"int", "Integer"}, {"char", "Character"}, {"string", "String"}, {"float", "Float"}};
    condmap = {{">", " greater "}, {"<", " less than "}, {"!=", " not equal "}, {"==", " equals "}, {">=", " greater than or equal to "}, {"<=", "less than or equal to"}};
    bracket = {'(', ')', '{', '}'};
}

void func_cin(string line)
{ //Create pseudo code for 'cin'

    int i = 0;
    while (i < line.size() && useless.find(line[i]) != useless.end()) //Covering up the spaces
        i++;
    i = i + 3; // covering up 'cin' i.e 3 words;
    int flag = 0;
    while (i < line.size())
    {
        string temp = "";
        while (i < line.size() && useless.find(line[i]) != useless.end())
            i++;

        if (i >= line.size())
            break;
        while (i < line.size() && !(useless.find(line[i]) != useless.end()))
        {
            temp += line[i];
            i++;
        }
        for (int j = 0; j < indent; j++)
        {
            outFile << "   ";
            cout << "   ";
        }
        outFile << "Enter ";
        cout << "Enter ";
        outFile << map_variable[temp] << " " << temp << "\n";
        cout << map_variable[temp] << " " << temp << "\n";
    }
}

void func_cout(string line)
{ //Create pseudo code for 'cout'
    int i = 0;
    while (i < line.size() && line[i] == ' ') //Covering up the spaces
        i++;
    i = i + 4; // covering up 'cin' i.e 3 words;
    while (i < line.size())
    {
        string temp = "";
        while (i < line.size() && useless.find(line[i]) != useless.end())
            i++;

        if (i >= line.size())
            break;
        while (i < line.size() && !(useless.find(line[i]) != useless.end()))
        {
            temp += line[i];
            i++;
        }
        for (int j = 0; j < indent; j++)
        {
            outFile << "   ";
            cout << "   ";
        }
        outFile << "Print ";
        cout << "Print ";
        outFile << map_variable[temp] << " " << temp << "\n";
        cout << map_variable[temp] << " " << temp << "\n";
    }
}

void func_return(string line) //Create pseudo code for 'return' statement for a function including 'main' as well
{
    int i = 0;
    while (i < line.size() && line[i] == ' ') //Covering up the spaces
        i++;
    for (int j = 0; j < indent; j++)
    {
        outFile << "   ";
        cout << "   ";
    }
    outFile << "function Returns ";
    cout << "function Returns ";
    i = i + 6; //covering up return
    string temp;
    while (i < line.size() && useless.find(line[i]) != useless.end())
        i++;
    temp = line[i];
    outFile << temp << "\n";
    cout << temp << "\n";
}

void func_dt(string line) //Mapping of varaibles to their data types.
{
    int i = 0;
    while (i < line.size() && useless.find(line[i]) != useless.end()) //Covering up the spaces
        i++;

    string Data_type = "";
    while (i < line.size() && !(useless.find(line[i]) != useless.end()))
    {
        Data_type += line[i];
        i++;
    }
    int ctr = 0, check_array = 0;
    vector<string> var_name;

    while (i < line.size())
    {
        string temp = "";
        while (i < line.size() && useless.find(line[i]) != useless.end())
            i++;

        if (i >= line.size())
            break;
        int detect_function = 0;
        while (i < line.size() && (!(useless.find(line[i]) != useless.end()) || line[i] == '('))
        {
            if (line[i] == '[')
            {
                i += 2;
                check_array = 1;
                break;
            }
            if (line[i] == '(')
            {
                detect_function = 1;
                break;
            }
            temp += line[i];
            i++;
        }
        if (detect_function)
        {
            for (int j = 0; j < indent; j++)
            {
                outFile << "   ";
                cout << "   ";
            }
            outFile << "Declare Function " << temp << "\n";
            cout << "Declare Function " << temp << "\n";
            break;
        }

        if (check_array)
        {
            for (int j = 0; j < indent; j++)
            {
                outFile << "   ";
                cout << "   ";
            }
            map_variable[temp] = keyword[Data_type];
            outFile << "Declare 1 " << keyword[Data_type] << " Array " << temp << "\n";
            cout << "Declare 1 " << keyword[Data_type] << " Array " << temp << "\n";
            check_array = 0;
            continue;
        }
        map_variable[temp] = keyword[Data_type];
        var_name.push_back(temp);
    }

    if (!var_name.empty())
    {
        for (i = 0; i < indent; i++)
        {
            outFile << "   ";
            cout << "   ";
        }
        outFile << "Declare " << var_name.size() << " " << keyword[Data_type] << " variable ";
        cout << "Declare " << var_name.size() << " " << keyword[Data_type] << " variable ";
        for (auto value : var_name)
        {
            outFile << value << " ";
            cout << value << " ";
        }
        outFile << "\n";
        cout << "\n";
    }
}

void func_cond(string line) //Generatting Pseudo code for conditions like if. (currently only if), else can be included later on.
{
    int i = 0;
    for (int j = 0; j < indent; j++)
    {
        outFile << "   ";
        cout << "   ";
    }
    while (line[i] != '(')
        i++;
    i++;
    outFile << "Check if ";
    cout << "Check if ";
    while (line[i] != ')')
    {
        outFile << line[i];
        cout << line[i];
        i++;
    }
    outFile << "\n";
    cout << "\n";
    for (int j = 0; j < indent + 1; j++)
    {
        outFile << "   ";
        cout << "   ";
    }
    outFile << "If True then : ";
    outFile << "\n";
    cout << "If True then : ";
    cout << "\n";
}

void func_loop(string line) //Create pseudo code for loops like for, while etc
{
    int i = 0;
    for (int j = 0; j < indent; j++)
    {
        outFile << "   ";
        cout << "   ";
    }
    outFile << "Start a loop from ";
    cout << "Start a loop from ";
    while (line[i] != '(')
        i++;
    i++;
    while (line[i] != ';')
    {
        outFile << line[i];
        cout << line[i];
        i++;
    }
    i++;
    outFile << " till ";
    cout << " till ";
    while (line[i] != ';')
    {
        outFile << line[i];
        cout << line[i];
        i++;
    }
    outFile << "\n";
    cout << "\n";
}

void func_oper(string line) //Create pseudo code for different operations
{
    int i = 0;
    for (int j = 0; j < indent; j++)
    {
        outFile << "   ";
        cout << "   ";
    }
    outFile << "Perform operation: ";
    cout << "Perform operation: ";
    string temp = "";
    while (line[i] == ' ')
        i++;

    while (i < line.size() && (!(useless.find(line[i]) != useless.end()) || line[i] == ' '))
    {
        temp += line[i];
        i++;
    }
    outFile << temp << "\n";
    cout << temp << "\n";
}

void check(string word, string line) //Checking for various conditions.
{
    if (word == "cin")
    {
        func_cin(line);
    }
    else if (word == "cout")
    {
        func_cout(line);
    }
    else if (word == "return")
    {
        func_return(line);
    }
    else if (data_type.find(word) != data_type.end())
    {
        func_dt(line);
    }
    else if (condition.find(word) != condition.end())
    {
        func_cond(line);
    }
    else if (loop.find(word) != loop.end())
    {
        func_loop(line);
    }
    else if (map_variable.find(word) != map_variable.end())
    {
        func_oper(line);
    }
    else
    {
        //cout<<"Expand your code \n";
    }
}

int main()
{
    ifstream inFile("prog.cpp");
    //Input file containing Pseudo code

    intialize();
    string line;
    int i = 0;
    // cout << "line" << inFile << "\n";
    while (inFile)
    {
        getline(inFile, line);

        i = 0;
        string word = "";
        while (i < line.size() && ((useless.find(line[i]) != useless.end())))
            i++;

        while (i < line.size() && !(useless.find(line[i]) != useless.end()))
        {
            word += line[i];
            i++;
        }
        if (word == "{")
        {
            indent++;
            continue;
        }
        if (word == "}")
        {
            indent--;
            continue;
        }
        check(word, line);
    }

    inFile.close();
    outFile.close();

    return 0;
}
