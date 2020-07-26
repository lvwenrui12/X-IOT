package com.xiot.devmanage.entity;

import lombok.Data;

import java.io.Serializable;
import java.util.List;

/**
 * @author lvwenrui
 * @version 1.0
 * 部门
 * @date 2020/6/20 0:19
 */
@Data
public class Department implements Serializable {
    private static final long serialVersionUID = -5698889678038074043L;

    private List<Workshop> workshops;
    private String code;
    private String name;
}
