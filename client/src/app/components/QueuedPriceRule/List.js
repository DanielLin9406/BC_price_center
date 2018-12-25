import { hot } from "react-hot-loader";
import React, { Component } from "react";

import { SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const DragHandle = SortableHandle(() => (
  <span>
    <FontAwesomeIcon icon={faBars} />
  </span>
));

// const SortableItem = SortableElement(
class Item extends React.Component{
    static contextTypes = {
      removePromotion: PropTypes.func,
      loadPromotion: PropTypes.func
    }    

    removePromotion = (event) => {
      this.context.removePromotion(event.currentTarget.id)
    }

    loadPromotion = (event) => {
      this.context.loadPromotion(event.currentTarget.id)
    }

    render(){
      return(
      <li className="queue-promotion-item">
        {/* <DragHandle /> */}
        <button 
          className="ctrl-btn"
          id={this.props.item.promotionId}
          onClick={this.loadPromotion}
        >
          <span>{this.props.item.name}</span>
          <span>{this.props.item.startDate} - {this.props.item.endDate}</span>
        </button>
        <button 
          className='ctrl-btn close-btn'
          id={this.props.item.promotionId}
          onClick={this.removePromotion}
        >X</button>
      </li> 
      )
    }
  }
// )

const SortableList = SortableContainer(({ items, isLoading, errorMsg }) => (
  <div>
    <div className="queue-promotion">
    {isLoading ? (
      "请求信息中......"
    ) : errorMsg ? (
      errorMsg
    ) : (
      <ul className="queue-promotion-list">
        {items.order.map((ele, index) => (
          <Item 
            key={`item-${index}`} 
            index={index} 
            item={items.queue[ele]}  
          />
        ))}
      </ul>      
    )}
    </div>
  </div>
))

export default hot(module)(SortableList)