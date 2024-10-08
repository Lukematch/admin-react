import { Button, Descriptions, DescriptionsProps, Image, Modal, Space } from 'antd'
import React, { useState } from 'react'
import Draggable from 'react-draggable'
import {
  HolderOutlined,
  BorderOutlined,
  CloseOutlined,
  SwitcherOutlined
} from '@ant-design/icons'
import { format } from 'date-fns'
import DraggableModal from '@/components/Modal/DraggableModal'


const ViewModal = (
  props: {
    type: 'edit' | 'view' | 'add' | undefined,
    open: boolean,
    setOpen: any,
    record: any
  }
) => {
  const {type, open, setOpen, record} = props

  const items: DescriptionsProps['items'] = [
    {
      key: '1',
      label: '编号',
      children: <span>{record?.id}</span>,
    },
    {
      key: '2',
      label: '用户名',
      children: <span>{record?.username}</span>,
    },
    {
      key: '3',
      label: '名称',
      children: <span>{record?.nickName || '-'}</span>,
    },
    {
      key: '4',
      label: '邮箱',
      children: <span>{record?.email || '-'}</span>,
    },
    {
      key: '5',
      label: '角色',
      children: <span>{(record?.role === 'root'? '超级管理员' : record?.role === 'user'? '普通用户' : '游客' ) || '-'}</span>,
      span: 3
    },
    {
      key: '6',
      label: '创建时间',
      children: <span>{record?.createTime && format(new Date(record?.createTime), 'yyyy-MM-dd HH:mm:ss') || '--'}</span>,
    },
    {
      key: '7',
      label: '更新时间',
      children: <span>{record?.updateTime && format(new Date(record?.updateTime), 'yyyy-MM-dd HH:mm:ss') || '--'}</span>,
    }
  ];

  return <DraggableModal
    open={open}
    setOpen={setOpen}
    title='查看详情'
    >
      <Image width={150} src={record?.avatar}
        preview={{
          maskStyle: {
            backdropFilter: 'blur(5px)',
            WebkitBackdropFilter: 'blur(5px)'
          }
        }}
      />
      <Descriptions
        bordered
        size="small"
        items={items}
        column={{xxl: 3, xl: 2, lg: 2, md: 2, sm: 1, xs: 1}}
      />

  </DraggableModal>
}

export default ViewModal