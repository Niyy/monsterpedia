using System.Collections;
using System.Collections.Generic;
using UnityEngine;


public class Maker : MonoBehaviour
{
    private new Camera camera;
    private GameObject piece_to_move;


    private void Start() 
    {
        camera = Camera.main;
        piece_to_move = null;
    }


    private void FixedUpdate() 
    {
        this.transform.position = Input.mousePosition;

        CheckOnPiece();
        MakePieceMovements();
    }


    private void CheckOnPiece()
    {
        RaycastHit2D hit = Physics2D.Raycast((Vector2)camera.ScreenToWorldPoint(Input.mousePosition), -Vector2.up);
        Debug.Log(hit);

        if(hit.collider != null)
        {
            if(Input.GetMouseButtonDown(0))
            {
                Debug.Log(hit.collider.name.Substring(0, 6));
                piece_to_move = hit.collider.gameObject;
            }
            else if(Input.GetMouseButtonUp(0))
            {
                piece_to_move = null;
            }
        }
    }


    private void MakePieceMovements()
    {
        if(piece_to_move != null)
        {
            Vector3 move_position = camera.ScreenToWorldPoint(Input.mousePosition);
            move_position.z = 0;

            piece_to_move.GetComponent<MonsterPiece>().MovePiece(move_position);
        }
    }
}