package com.dimple.project.blog.category.controller;

import com.dimple.framework.aspectj.lang.annotation.Log;
import com.dimple.framework.aspectj.lang.enums.BusinessType;
import com.dimple.framework.web.controller.BaseController;
import com.dimple.framework.web.domain.AjaxResult;
import com.dimple.framework.web.domain.BaseEntity;
import com.dimple.framework.web.page.TableDataInfo;
import com.dimple.project.blog.blog.domain.Blog;
import com.dimple.project.blog.category.domain.Category;
import com.dimple.project.blog.category.service.CategoryService;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @className: CategoryController
 * @description:
 * @auther: Dimple
 * @Date: 2019/3/16
 * @Version: 1.0
 */
@Controller
@RequestMapping("/blog/category")
public class CategoryController extends BaseController {

    @Autowired
    CategoryService categoryService;


    @RequiresPermissions("blog:blog:view")
    @GetMapping()
    public String blog() {
        return "blog/blog/blog";
    }

    @GetMapping("/list")
    @RequiresPermissions("blog:category:list")
    @ResponseBody
    public TableDataInfo list(Category category) {
        startPage();
        List<Category> list = categoryService.selectCategoryList(category);
        return getDataTable(list);
    }

    @GetMapping("/add")
    public String add() {
        return "blog/category/add";
    }

    @Log(title = "分类管理", businessType = BusinessType.INSERT)
    @RequiresPermissions("blog:blog:add")
    @PostMapping("/add")
    public AjaxResult addSave(Category category) {
        return toAjax(categoryService.insertCategory(category));
    }

    @GetMapping("/edit/{categoryId}")
    public String edit(@PathVariable Integer categoryId, Model model) {
        model.addAttribute("category", categoryService.selectCategoryById(categoryId));
        return "/blog/category/edit";
    }

    @PutMapping("/edit")
    @RequiresPermissions("blog:category:edit")
    @Log(title = "分类管理", businessType = BusinessType.UPDATE)
    @ResponseBody
    public AjaxResult editSave(Category category) {
        return toAjax(categoryService.updateCategory(category));
    }

    @DeleteMapping("/remove")
    @Log(title = "分类管理", businessType = BusinessType.DELETE)
    @RequiresPermissions("blog:category:remove")
    @ResponseBody
    public AjaxResult remove(Integer ids[]) {
        return toAjax(categoryService.deleteCategoryByIds(ids));
    }
}