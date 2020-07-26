package com.xiot.devmanage.entity;

import lombok.Data;

import java.io.Serializable;
import java.util.List;

/**
 * @author lvwenrui
 * @version 1.0
 * @date 2020/6/20 0:05
 */
@Data
public class Factory implements Serializable {


    private static final long serialVersionUID = 2893009416919636946L;
    /**
     * 编码
     */
    private String code;
    /**
     *  名称
     */
    private String name;
    /**
     *
     * 地址
     */
    private Address address;
    /**
     * 部门
     */
    private List<Department> departments;

}
