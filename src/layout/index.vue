<!--
 * @Author: suwanqing
 * @Date: 2020-09-09 11:26:09
 * @LastEditors: suwanqing
 * @LastEditTime: 2020-09-14 17:56:21
 * @Description: file content
-->
<template>
  <div class="layout">
    <Layout>
        <Header>
          <Mheader />
        </Header>
      <Layout>
        <Sider hide-trigger>
          <Msider />
        </Sider>
        <Content>
          <Mcontent />
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
import Mheader from './header.vue'
import Msider from './sider.vue'
import Mcontent from './content.vue'

export default {
  name: 'Home',
  components: {
    Mheader,
    Msider,
    Mcontent
  }
}
</script>
