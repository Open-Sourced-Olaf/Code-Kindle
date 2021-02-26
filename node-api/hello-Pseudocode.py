CLASS Node(object):
    # Singly linked node
    FUNCTION __init__(self, value=None, next=None, prev=None):
         value <- value
         next <- next
         prev <- prev
    ENDFUNCTION

ENDCLASS

CLASS doubly_linked_list(object):
    FUNCTION __init__(self):
         head <- None
         tail <- None
         count <- 0
    ENDFUNCTION

    FUNCTION append_item(self, value):
        # Append an item 
        new_item <- Node(value, None, None)
        IF  head is None:
             head <- new_item
             tail <-  head
        ELSE:
            new_item.prev <-  tail
             tail.next <- new_item
             tail <- new_item
        ENDIF
         count += 1
    ENDFUNCTION

    FUNCTION iter(self):
        # Iterate the list
        current <-  head
        while current:
            item_val <- current.value
            current <- current.next
            yield item_val
    ENDFUNCTION

        ENDWHILE
    FUNCTION print_foward(self):
        for node in  iter():
            OUTPUT node   
    ENDFUNCTION

        ENDFOR
    FUNCTION search_item(self, val):
         for node in  iter():
            IF val = node:
                RETURN True
            ENDIF
         ENDFOR
         RETURN False
    ENDFUNCTION

    FUNCTION delete(self, value):
        # Delete a specific item
                       ENDIF
        current <-  head
        node_deleted <- False
        IF current is None:
            node_deleted <- False
        ELSEIF current.value = value:
             head <- current.next
             head.prev <- None
            node_deleted <- True
        ELSEIF  tail.value = value:
             tail <-  tail.prev
             tail.next <- None
            node_deleted <- True
        ELSE:
            while current:
                IF current.value = value:
                    current.prev.next <- current.next
                    current.next.prev <- current.prev
                    node_deleted <- True
                ENDIF
                current <- current.next
        ENDIF
            ENDWHILE
        IF node_deleted:
             count -= 1
        ENDIF
    ENDFUNCTION

ENDCLASS

items <- doubly_linked_list()
items.append_item('PHP')
items.append_item('Python')
items.append_item('C#')
items.append_item('C++')
items.append_item('Java')
items.append_item('SQL')
OUTPUT "Original list:"
items.print_foward()
items.delete("Java")
items.delete("Python")
OUTPUT "\nList after deleting two items:"
items.print_foward(
