<template>
  <v-list
    dense
    nav
    expand
  >
    <template
      v-for="(item, index) in items"
    >
      <default-list-group
        v-if="item.items"
        :key="`group-${index}`"
        :item="item"
      />
      <default-list-item
        :key="index"
        :item="item"
      />
    </template>
  </v-list>
</template>

<script>
import DefaultListItem from './ListItem'
import DefaultListGroup from './ListGroup'
export default {
name: 'DefaultDrawerList',
components: {DefaultListItem, DefaultListGroup},
props: {
  items: {
    type: Array,
    default: () => ([]),
  }
}
}
</script>

<style>

</style>
