import { ChangeEvent, useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { useParams } from "react-router-dom";
import { IConditionCreate, createCondition } from '../axios/condition';

type IProps = {
  onConditionCreated:()=>void
}

const NewCondition = ({onConditionCreated}:IProps) => {
    const {userId} = useParams()
    const [title,setTitle] = useState("");

    const onCreateCondition = async () => {
        if(userId == undefined)
            return;

        const condition:IConditionCreate = {
            patientSocialNr: userId,
            doctorEmployeeId: "",
            diagnos: title
        }
        const res = await createCondition(condition)

        if(res) {
          onConditionCreated()
        }
    }

    return(
    <Dialog>
      <DialogTrigger asChild>
      <button className='px-6 py-3 rounded-full bg-[#3260FC] text-white'>New observation</button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>New Condition</DialogTitle>
          <DialogDescription>
            Create new Condition.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Title
            </Label>
            <Input id="username" className="col-span-3"  onChange={(e:ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}/>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={onCreateCondition}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    )
}
export default NewCondition;