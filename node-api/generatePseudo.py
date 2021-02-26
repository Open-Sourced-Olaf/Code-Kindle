
import logging
from logging import debug, info, warning, basicConfig, INFO, DEBUG, WARNING
basicConfig(level = WARNING)
import os
from pathlib import Path
path  = Path(__file__).resolve().parent.parent



MEDIA_ROOT = os.path.join(path, "backend","media","documents")



arr = os.listdir(MEDIA_ROOT)

for file in arr:
    filename=file

TestFile= os.path.join(MEDIA_ROOT,filename)


def getTextFile(filep):
    file = open(filep)
    listFile = []
    while 1:
        line = file.readline()
        if not line:
            break
        listFile.append(line)
    return listFile

def removeLastCharacter(listFile):
    for count in range(0, len(listFile)):
        listFile[count] = listFile[count][0: (len(listFile[count]))-1]
    return listFile

def removeBlanks(listFile):
    remove = [ ]
    for count in range(0, len(listFile)):
        blankFound = False
        for i in range(0, len(listFile[count])):
            if not(listFile[count][i] == " "):
                blankFound = True
        if blankFound == False:
            remove.append(count)

    remove1 = []
    for i in reversed(remove):
        remove1.append(i)

    for j in range(0, len(remove1)):
        listFile.pop(remove1[j])
        debug("just removed " + str(remove1[j]))
    return listFile

def detectMultiLineComment(getTextFile):
    start = 0
    end = 0
    avoid = []
    endSearch = False
    for count in range(0, len(getTextFile)):
        found = getTextFile[count].find('"""')
        if(found != -1):
            if endSearch == False:
                endSearch = True
                start = count
                foundAgain = False
                for count3 in range(found, len(getTextFile[count])-3):
                    if getTextFile[count][count3 : count3+3] == '"""':
                        endSearch = False
            else:
                lineEnd = count
                endSearch = False
                for count2 in range(start, lineEnd + 1):
                    avoid.append(count2)
    return avoid

def replacer(listFile, avoidLines, clues, charCheck = True, removeEndChar = False):
    lineNo = []
    for count in range(0, len(listFile)):
        for i in range(0, len(clues)):
            found = listFile[count].find(clues[i][0])
            if(not (found == -1) and not (count in avoidLines)):
                if(found > 0) and (len(listFile[count]) > (found+len(clues[i][0]))) and charCheck:
                    workOn = listFile[count]
                    debug(listFile[count][found - 1])
                    debug(listFile[count][found + len(clues[i][0])])
                    if count == 14:
                        pass
                    if ((listFile[count][found-1] == "(") or (listFile[count][found-1] == " ") or (listFile[count][found-1] == '"') or (listFile[count][found-1] == '.')) and ((listFile[count][found+len(clues[i][0])] == "(") or (listFile[count][found+len(clues[i][0])]== " ") or (listFile[count][found+len(clues[i][0])] == '"') or (listFile[count][found+len(clues[i][0])] == ".")):
                        firstbit = listFile[count][:found]
                        secondbit = listFile[count][found+len(clues[i][0]):len(listFile[count])]
                        fixed = firstbit + clues[i][1] + secondbit
                        listFile[count] = fixed

                else:
                    firstbit = listFile[count][:found]
                    secondbit = listFile[count][found+len(clues[i][0]):len(listFile[count])]
                    fixed = firstbit + clues[i][1] + secondbit
                    listFile[count] = fixed
                    if removeEndChar:
                        workOn = removeLastChar(listFile[count], clues[i][2])
                        listFile[count] = workOn
    return listFile

def writeListFile(listFile, name = "/home/asus/Terminal-2.0/python-scripts/pythonfixed.py"):
    name = name[0:len(name)-3] + "-Pseudocode" + name[(len(name)-3) : len(name)]
    file = open(name, 'w')
    mainstr = ""
    for i in range(0, len(listFile)):
        mainstr = mainstr + listFile[i] + "\n"
    file.write(mainstr)
    file.close()
    log = open(name, "r")
    for line in log:
        print(line)

    


def indent(listFile, avoidLines):
    search = [["if", "ENDIF", [], [], False], ["def", "ENDFUNCTION", [], [] , True ], ["class", "ENDCLASS", [], [] , True ], ["while", "ENDWHILE", [], [] , False ], ["for", "ENDFOR", [], [] , False]]
    for count in range(len(listFile)):
        for i in range(len(search)):
            currentClue = search[i][0]
            found = listFile[count].find(search[i][0])

            if (not (found == -1)) and not (count in avoidLines):
                debug("found an if on line " + str(count))
                #print(svgfile[count])
                debug("found is " + str(found))
                #time.sleep(0.1)
                distance = found  #Distance is basically how many characters it is indented in
                lineDone = False
                for a in range(count+1, len(listFile)): #Iterate through rest of the lines
                    f = False

                    for x in range(0, distance + 1): #
                        if distance == 0:
                            pass
                        try:
                            if not (listFile[a][x] == " "):
                                if listFile[a][distance:(distance+4)] == "else":
                                    debug("else found" + str(a))
                                    f = False
                                elif (listFile[a][distance:(distance+1)] == "#"):
                                    debug("# found "+ str(a))
                                    f = False
                                elif (listFile[a][distance:(distance+3)] == "~~~"):
                                    debug(listFile[a][distance:(distance+4)])
                                    f = False
                                else:
                                    f = True

                        except:
                            debug("error")

                    if f:
                        if lineDone == False:
                            search[i][2].append(a)
                            search[i][3].append(distance)
                            lineDone = True
                        break
    debug("HI")
    return search

def buildListFile(listFile, search, remove = []):
    listFile2 = []
    for i in range(0, len(listFile)):
        for count in range(0, len(search)):
            if i in search[count][2]:
                for x in range(0, len(search[count][2])):
                    if search[count][2][x] == i:
                        workOn = x
                        indent = ""
                        for y in range(0, search[count][3][x]):
                            indent = indent + " "
                        listFile2.append(indent + search[count][1])
                        if search[count][4]:
                            listFile2.append("")
        if not (i in remove):
            listFile2.append(listFile[i])

    return listFile2

def removeBlankLines(listFile, clues):
    remove = []
    for i in range(0, len(listFile)):
        for j in range(0, len(clues)):
            found = listFile[i].find(clues[j])
            if found != (-1):
                remove.append(i)
    return remove


def listConversion(string):
    ll = []
    for i in range(0, len(string)):
        ll.append(string[i])
    return ll

def stringConversion(list):
    string = ""
    for i in range(0, len(list)):
        string = string + list[i]
    return string

def removeLastChar(line, remove):
    line = listConversion(line)
    for i in range(len(line) -1, 0, -1):
        if line[i] == remove:
            line.pop(i)
            break
    return stringConversion(line)


def main(filename):

   
    listFile = getTextFile(filename)                             
    listFile = removeLastCharacter(listFile)                                 
    listFile = removeBlanks(listFile)                       
    avoidLines = detectMultiLineComment(listFile)       
    

    clues = [["elif", "~~~"],]

    for i in range(0, 6):
        listFile = replacer(listFile, avoidLines, clues)   

    search =  indent(listFile, avoidLines)       
    listFile = buildListFile(listFile, search, removeBlankLines(listFile, ["debug", "info", "warning", "#print"]))

    for x in range(0, 10):
        listFile = replacer(listFile, avoidLines, [["def", "FUNCTION"], ["print", "OUTPUT"], ["self.", " "], ["return", "RETURN"], ["else:", "ELSE:"], ["==", "|"], ["if", "IF"], ["or", "OR"], ["and", "AND"],["and", "AND"], ["class", "CLASS"]  ])
    for x in range(0, 5):
        listFile = replacer(listFile, avoidLines, [["self.", " "],], False)
    for x in range(0, 10):
        listFile = replacer(listFile, avoidLines, [["=", "<-"], ["~~~", "ELSEIF"]])
    for x in range(0, 10):
        listFile = replacer(listFile, avoidLines, [["|", "="],])

    listFile = replacer(listFile, avoidLines, [["OUTPUT(", "OUTPUT ", ")"]], False, True)


    listFile = replacer(listFile, avoidLines, [["<- ?", "= ?"]])
    listFile = replacer(listFile, avoidLines, [["<- ?", "= ?"]])

    writeListFile(listFile, filename)

main(TestFile)
pseudo= TestFile[0:len(TestFile)-3]  +"-Pseudocode"+TestFile[(len(TestFile)-3) : len(TestFile)]
os.remove(TestFile)

os.remove(pseudo)
