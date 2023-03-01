import React from "react";


import { priority } from "./priority";
export class Tasks {

    id = undefined;
    name ='';
    description = '';
    status = '';
    priority = '';
    tags = []
    

    constructor(name, description, status, priority, tag)
{   
    this.id = id;
    this.name = name;
    this.description = description;
    this.status = status;
    this.priority = priority;
    this.tags = tag;
}
}

